/**
 * @generated SignedSource<<647d7408d1e90698e34c8d17df0fde13>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ColorBy = "field" | "instance" | "value" | "%future added value";
export type SidebarMode = "all" | "best" | "fast" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type datasetAppConfigFragment$data = {
  readonly colorScheme: {
    readonly colorBy: ColorBy | null;
    readonly colorPool: ReadonlyArray<string>;
    readonly defaultMaskTargetsColors: ReadonlyArray<{
      readonly color: string;
      readonly intTarget: number;
    }> | null;
    readonly fields: ReadonlyArray<{
      readonly colorByAttribute: string | null;
      readonly fieldColor: string | null;
      readonly maskTargetsColors: ReadonlyArray<{
        readonly color: string;
        readonly intTarget: number;
      }> | null;
      readonly path: string;
      readonly valueColors: ReadonlyArray<{
        readonly color: string;
        readonly value: string;
      }> | null;
    }> | null;
    readonly id: string;
    readonly labelTags: {
      readonly fieldColor: string | null;
      readonly valueColors: ReadonlyArray<{
        readonly color: string;
        readonly value: string;
      }> | null;
    } | null;
    readonly multicolorKeypoints: boolean | null;
    readonly opacity: number | null;
    readonly showSkeletons: boolean | null;
  } | null;
  readonly gridMediaField: string;
  readonly mediaFields: ReadonlyArray<string> | null;
  readonly modalMediaField: string;
  readonly plugins: object | null;
  readonly sidebarMode: SidebarMode | null;
  readonly " $fragmentType": "datasetAppConfigFragment";
};
export type datasetAppConfigFragment$key = {
  readonly " $data"?: datasetAppConfigFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"datasetAppConfigFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldColor",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "ValueColor",
  "kind": "LinkedField",
  "name": "valueColors",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "intTarget",
    "storageKey": null
  },
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "datasetAppConfigFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gridMediaField",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mediaFields",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "modalMediaField",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "plugins",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sidebarMode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ColorScheme",
      "kind": "LinkedField",
      "name": "colorScheme",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "colorBy",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "colorPool",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "multicolorKeypoints",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "opacity",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showSkeletons",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "LabelTagColor",
          "kind": "LinkedField",
          "name": "labelTags",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MaskColor",
          "kind": "LinkedField",
          "name": "defaultMaskTargetsColors",
          "plural": true,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CustomizeColor",
          "kind": "LinkedField",
          "name": "fields",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "colorByAttribute",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "path",
              "storageKey": null
            },
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "MaskColor",
              "kind": "LinkedField",
              "name": "maskTargetsColors",
              "plural": true,
              "selections": (v3/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DatasetAppConfig",
  "abstractKey": null
};
})();

(node as any).hash = "2d9298338224526d2c650756b0d077c0";

export default node;
