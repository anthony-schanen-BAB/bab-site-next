// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5wfiQsykEjzgVqMWi3s1vV
// Component: t2lTgwsfEcjo

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5wfiQsykEjzgVqMWi3s1vV/projectcss
import sty from "./PlasmicMenuItemImage.module.css"; // plasmic-import: t2lTgwsfEcjo/css

createPlasmicElementProxy;

export type PlasmicMenuItemImage__VariantMembers = {};
export type PlasmicMenuItemImage__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuItemImage__VariantsArgs;
export const PlasmicMenuItemImage__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuItemImage__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMenuItemImage__ArgsType;
export const PlasmicMenuItemImage__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicMenuItemImage__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  h3?: Flex__<"h3">;
  freeBox?: Flex__<"div">;
};

export interface DefaultMenuItemImageProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuItemImage__RenderFunc(props: {
  variants: PlasmicMenuItemImage__VariantsArgs;
  args: PlasmicMenuItemImage__ArgsType;
  overrides: PlasmicMenuItemImage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column___1QHWa)}>
          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(projectcss.all, projectcss.h3, sty.h3)}
          >
            {renderPlasmicSlot({
              defaultContents: "Enter some text",
              value: args.children
            })}
          </h3>
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {renderPlasmicSlot({
              defaultContents: "Enter some text",
              value: args.slot
            })}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__i8Sdz)}>
          {renderPlasmicSlot({
            defaultContents: (
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___9HxLw)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"40%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"50%"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/www_site/images/image6.png",
                  fullWidth: 1038,
                  fullHeight: 386,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.slot2
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "h3", "freeBox"],
  columns: ["columns", "h3", "freeBox"],
  h3: ["h3"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  h3: "h3";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItemImage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItemImage__VariantsArgs;
    args?: PlasmicMenuItemImage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItemImage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuItemImage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuItemImage__ArgProps,
          internalVariantPropNames: PlasmicMenuItemImage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuItemImage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItemImage";
  } else {
    func.displayName = `PlasmicMenuItemImage.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItemImage = Object.assign(
  // Top-level PlasmicMenuItemImage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h3: makeNodeComponent("h3"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMenuItemImage
    internalVariantProps: PlasmicMenuItemImage__VariantProps,
    internalArgProps: PlasmicMenuItemImage__ArgProps
  }
);

export default PlasmicMenuItemImage;
/* prettier-ignore-end */
