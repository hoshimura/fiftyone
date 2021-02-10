import React from "react";
import { animated } from "react-spring";
import {
  atomFamily,
  DefaultValue,
  GetRecoilValue,
  selectorFamily,
  SetRecoilState,
  useRecoilValue,
} from "recoil";

import * as selectors from "../../recoil/selectors";
import { NamedRangeSlider, Range } from "./RangeSlider";
import { hasNoneField, useExpand } from "./utils";
import { AGGS } from "../../utils/labels";

type NumericFilter = {
  range: Range;
  none: boolean;
  _CLS: string;
};

const getFilter = (
  get: GetRecoilValue,
  path: string,
  defaultRange?: Range
): NumericFilter => {
  return {
    ...{
      range: get(boundsAtom({ path, defaultRange })),
      none: true,
    },
    ...get(selectors.filterStage(path)),
  };
};

const meetsDefault = (filter: NumericFilter, bounds: Range) => {
  return filter.range.every((r, i) => r === bounds[i]) && filter.none === true;
};

const setFilter = (
  get: GetRecoilValue,
  set: SetRecoilState,
  path: string,
  key: string,
  value: boolean | Range | DefaultValue,
  defaultRange: Range | null = null
) => {
  const bounds = get(boundsAtom({ path, defaultRange }));
  const filter = {
    range: bounds,
    ...getFilter(get, path),
    [key]: value,
    _CLS: "numeric",
  };

  if (meetsDefault(filter, bounds)) {
    set(selectors.filterStage(path), null);
  } else {
    set(selectors.filterStage(path), filter);
  }
};

export const boundsAtom = selectorFamily<
  Range,
  {
    path: string;
    defaultRange?: Range;
  }
>({
  key: "numericFieldBounds",
  get: ({ path, defaultRange }) => ({ get }) => {
    return (get(selectors.datasetStats) ?? []).reduce(
      (acc, cur) => {
        if (cur.name === path && cur._CLS === AGGS.BOUNDS) {
          let { result: bounds } = cur;
          let [maxMin, minMax]: Range = [null, null];
          if (defaultRange) {
            [maxMin, minMax] = defaultRange;
            bounds = [
              maxMin < bounds[0] ? maxMin : bounds[0],
              minMax > bounds[1] ? minMax : bounds[1],
            ];
          }
          return [
            bounds[0] !== null && bounds[0] !== maxMin
              ? Number((bounds[0] - 0.01).toFixed(2))
              : bounds[0],
            bounds[1] !== null && bounds[1] !== minMax
              ? Number((bounds[1] + 0.01).toFixed(2))
              : bounds[1],
          ];
        }
        return acc;
      },
      [null, null]
    );
  },
});

export const rangeAtom = selectorFamily<
  Range,
  {
    path: string;
    defaultRange?: Range;
  }
>({
  key: "filterNumericFieldRange",
  get: ({ path, defaultRange }) => ({ get }) => {
    return getFilter(get, path, defaultRange).range;
  },
  set: ({ path, defaultRange }) => ({ get, set }, range) =>
    setFilter(get, set, path, "range", range, defaultRange),
});

export const rangeModalAtom = atomFamily<
  Range,
  {
    path: string;
    defaultRange?: Range;
  }
>({
  key: "modalFilterNumericFieldRange",
  default: rangeAtom,
});

export const noneAtom = selectorFamily<boolean, string>({
  key: "filterNumericFieldNone",
  get: (path) => ({ get }) => getFilter(get, path).none,
  set: (path) => ({ get, set }, value) =>
    setFilter(get, set, path, "none", value),
});

export const noneModalAtom = atomFamily<boolean, string>({
  key: "modalFilterNumericFieldNone",
  default: true,
});

export const fieldIsFiltered = selectorFamily<
  boolean,
  {
    path: string;
    defaultRange?: Range;
    modal?: boolean;
  }
>({
  key: "numericFieldIsFiltered",
  get: ({ path, defaultRange, modal }) => ({ get }) => {
    const [noneValue, rangeValue] = modal
      ? [noneModalAtom, rangeModalAtom]
      : [noneAtom, rangeAtom];
    const [none, range] = [
      get(noneValue(path)),
      get(rangeValue({ path, defaultRange })),
    ];
    const bounds = get(boundsAtom({ path, defaultRange }));

    return (
      !none ||
      (bounds.some(
        (b, i) => range[i] !== b && b !== null && range[i] !== null
      ) &&
        bounds[0] !== bounds[1])
    );
  },
});

const NumericFieldFilter = ({ expanded, entry }) => {
  const [ref, props] = useExpand(expanded);
  return (
    <animated.div style={props}>
      <NamedRangeSlider
        color={entry.color}
        name={"Range"}
        valueName={"value"}
        boundsAtom={boundsAtom({ path: entry.path })}
        hasNoneAtom={hasNoneField(entry.path)}
        rangeAtom={rangeAtom({ path: entry.path })}
        noneAtom={noneAtom(entry.path)}
        ref={ref}
      />
    </animated.div>
  );
};

export default React.memo(NumericFieldFilter);
