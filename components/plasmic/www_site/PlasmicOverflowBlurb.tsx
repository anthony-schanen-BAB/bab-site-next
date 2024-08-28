// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5wfiQsykEjzgVqMWi3s1vV
// Component: ap0zrG-_Q0mJ

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

import { useScreenVariants as useScreenVariantso1EZtZviId2I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o1EZtZVIId2i/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5wfiQsykEjzgVqMWi3s1vV/projectcss
import sty from "./PlasmicOverflowBlurb.module.css"; // plasmic-import: ap0zrG-_Q0mJ/css

createPlasmicElementProxy;

export type PlasmicOverflowBlurb__VariantMembers = {};
export type PlasmicOverflowBlurb__VariantsArgs = {};
type VariantPropType = keyof PlasmicOverflowBlurb__VariantsArgs;
export const PlasmicOverflowBlurb__VariantProps = new Array<VariantPropType>();

export type PlasmicOverflowBlurb__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOverflowBlurb__ArgsType;
export const PlasmicOverflowBlurb__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4"
);

export type PlasmicOverflowBlurb__OverridesType = {
  root?: Flex__<"div">;
  columns?: Flex__<"div">;
  h2?: Flex__<"h2">;
};

export interface DefaultOverflowBlurbProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOverflowBlurb__RenderFunc(props: {
  variants: PlasmicOverflowBlurb__VariantsArgs;
  args: PlasmicOverflowBlurb__ArgsType;
  overrides: PlasmicOverflowBlurb__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso1EZtZviId2I()
  });

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
      <div className={classNames(projectcss.all, sty.freeBox___1ShQv)}>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false)
          ? renderPlasmicSlot({
              defaultContents: (
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__x4W3D)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/www_site/images/image4.png",
                    fullWidth: 1506,
                    fullHeight: 1202,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.slot4
            })
          : null}
      </div>
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__hvCgz)}>
          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(projectcss.all, projectcss.h2, sty.h2)}
          >
            {renderPlasmicSlot({
              defaultContents: "BOWL IN ONE OF OUR LEAGUES!",
              value: args.children
            })}
          </h2>
          <div className={classNames(projectcss.all, sty.freeBox__owQsf)}>
            {renderPlasmicSlot({
              defaultContents:
                "There are plenty of perks to bowling with us in a league! Here are just a handful of examples:\n\ndiscounted practice bowling\nonline access to your bowling history\nonline access to league standings\nability to change your game display name\nauto pay league fee payments\nexclusive access to special member events\nleague specific benefits such as gear and refreshments\nexclusive referral benefits for events\nonline access to real-time brackets\ndiscounted food and beverage during league play\n...and so much more! Join us for our league play and take part in the fun!",
              value: args.slot
            })}
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__pEjvR)}>
          <div className={classNames(projectcss.all, sty.freeBox__v9Khx)}>
            {renderPlasmicSlot({
              defaultContents: (
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__lhRoh)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/www_site/images/image4.png",
                    fullWidth: 1506,
                    fullHeight: 1202,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.slot2
            })}
          </div>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__cSJ)}>
        {renderPlasmicSlot({
          defaultContents:
            "Questions? Contact our league coordinators! \nCall 818-892-8677 or email leaguesnr@backalleybowling.com",
          value: args.slot3,
          className: classNames(sty.slotTargetSlot3)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "h2"],
  columns: ["columns", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOverflowBlurb__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOverflowBlurb__VariantsArgs;
    args?: PlasmicOverflowBlurb__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOverflowBlurb__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOverflowBlurb__ArgsType,
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
          internalArgPropNames: PlasmicOverflowBlurb__ArgProps,
          internalVariantPropNames: PlasmicOverflowBlurb__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOverflowBlurb__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOverflowBlurb";
  } else {
    func.displayName = `PlasmicOverflowBlurb.${nodeName}`;
  }
  return func;
}

export const PlasmicOverflowBlurb = Object.assign(
  // Top-level PlasmicOverflowBlurb renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicOverflowBlurb
    internalVariantProps: PlasmicOverflowBlurb__VariantProps,
    internalArgProps: PlasmicOverflowBlurb__ArgProps
  }
);

export default PlasmicOverflowBlurb;
/* prettier-ignore-end */
