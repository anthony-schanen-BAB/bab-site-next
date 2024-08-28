// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5wfiQsykEjzgVqMWi3s1vV
// Component: vXh5P781hzqk

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import VerticalMenu from "../../VerticalMenu"; // plasmic-import: ht9ZItoIyBG9/component
import Navigation from "../../Navigation"; // plasmic-import: M5wgRRxb8Cye/component
import LocationPicker from "../../LocationPicker"; // plasmic-import: PpwuOcX4S-rM/component
import HeroParties from "../../HeroParties"; // plasmic-import: WOgCfgFXVur9/component
import Tilt from "@plasmicpkgs/react-parallax-tilt";
import PageZoneRenderer from "../../PageZoneRenderer"; // plasmic-import: 5Y20vviCdvey/component
import Footer from "../../Footer"; // plasmic-import: 3ay2Lj1jEYFZ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantso1EZtZviId2I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: o1EZtZVIId2i/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5wfiQsykEjzgVqMWi3s1vV/projectcss
import sty from "./PlasmicPartiesAndEvents.module.css"; // plasmic-import: vXh5P781hzqk/css

createPlasmicElementProxy;

export type PlasmicPartiesAndEvents__VariantMembers = {};
export type PlasmicPartiesAndEvents__VariantsArgs = {};
type VariantPropType = keyof PlasmicPartiesAndEvents__VariantsArgs;
export const PlasmicPartiesAndEvents__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPartiesAndEvents__ArgsType = {};
type ArgPropType = keyof PlasmicPartiesAndEvents__ArgsType;
export const PlasmicPartiesAndEvents__ArgProps = new Array<ArgPropType>();

export type PlasmicPartiesAndEvents__OverridesType = {
  root?: Flex__<"div">;
  verticalMenu?: Flex__<typeof VerticalMenu>;
  navstack?: Flex__<"div">;
  navigation?: Flex__<typeof Navigation>;
  locationPicker?: Flex__<typeof LocationPicker>;
  heroParties?: Flex__<typeof HeroParties>;
  pageZoneRenderer?: Flex__<typeof PageZoneRenderer>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultPartiesAndEventsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPartiesAndEvents__RenderFunc(props: {
  variants: PlasmicPartiesAndEvents__VariantsArgs;
  args: PlasmicPartiesAndEvents__ArgsType;
  overrides: PlasmicPartiesAndEvents__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "pageZoneRenderer[].locationState",
        type: "private",
        variableType: "text"
      },
      {
        path: "locationPicker.selectValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "bLRLN2gabmtZZKnFRpxBVX",
        opId: "c4ca0a30-6a77-44d9-85b1-2e90b22c63c8",
        userArgs: {},
        cacheKey: `plasmic.$.c4ca0a30-6a77-44d9-85b1-2e90b22c63c8.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantso1EZtZviId2I()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__l6IGr)}>
            <VerticalMenu
              data-plasmic-name={"verticalMenu"}
              data-plasmic-override={overrides.verticalMenu}
              className={classNames("__wab_instance", sty.verticalMenu)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__nf6TS)}>
              <div
                data-plasmic-name={"navstack"}
                data-plasmic-override={overrides.navstack}
                className={classNames(projectcss.all, sty.navstack)}
              >
                <Navigation
                  data-plasmic-name={"navigation"}
                  data-plasmic-override={overrides.navigation}
                  className={classNames("__wab_instance", sty.navigation)}
                />

                <LocationPicker
                  data-plasmic-name={"locationPicker"}
                  data-plasmic-override={overrides.locationPicker}
                  className={classNames("__wab_instance", sty.locationPicker)}
                  onSelectValueChange={generateStateOnChangeProp($state, [
                    "locationPicker",
                    "selectValue"
                  ])}
                  selectValue={generateStateValueProp($state, [
                    "locationPicker",
                    "selectValue"
                  ])}
                />
              </div>
              <HeroParties
                data-plasmic-name={"heroParties"}
                data-plasmic-override={overrides.heroParties}
                className={classNames("__wab_instance", sty.heroParties)}
              />

              {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                (() => {
                  try {
                    return $queries.query.data.response.fields.pageZones;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (() => {
                  const child$Props = {
                    className: classNames(
                      "__wab_instance",
                      sty.pageZoneRenderer
                    ),
                    key: currentIndex,
                    locationProp1: (() => {
                      try {
                        return $state.locationPicker.selectValue;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })(),
                    locationState: generateStateValueProp($state, [
                      "pageZoneRenderer",
                      __plasmic_idx_0,
                      "locationState"
                    ]),
                    onLocationStateChange: generateStateOnChangeProp($state, [
                      "pageZoneRenderer",
                      __plasmic_idx_0,
                      "locationState"
                    ]),
                    zoneId: (() => {
                      try {
                        return currentItem.sys.id;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  };

                  initializePlasmicStates(
                    $state,
                    [
                      {
                        name: "pageZoneRenderer[].locationState",
                        initFunc: ({ $props, $state, $queries }) => "Glendale"
                      }
                    ],
                    [__plasmic_idx_0]
                  );
                  return (
                    <PageZoneRenderer
                      data-plasmic-name={"pageZoneRenderer"}
                      data-plasmic-override={overrides.pageZoneRenderer}
                      {...child$Props}
                    />
                  );
                })();
              })}
              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "verticalMenu",
    "navstack",
    "navigation",
    "locationPicker",
    "heroParties",
    "pageZoneRenderer",
    "footer"
  ],
  verticalMenu: ["verticalMenu"],
  navstack: ["navstack", "navigation", "locationPicker"],
  navigation: ["navigation"],
  locationPicker: ["locationPicker"],
  heroParties: ["heroParties"],
  pageZoneRenderer: ["pageZoneRenderer"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  verticalMenu: typeof VerticalMenu;
  navstack: "div";
  navigation: typeof Navigation;
  locationPicker: typeof LocationPicker;
  heroParties: typeof HeroParties;
  pageZoneRenderer: typeof PageZoneRenderer;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPartiesAndEvents__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPartiesAndEvents__VariantsArgs;
    args?: PlasmicPartiesAndEvents__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPartiesAndEvents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPartiesAndEvents__ArgsType,
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
          internalArgPropNames: PlasmicPartiesAndEvents__ArgProps,
          internalVariantPropNames: PlasmicPartiesAndEvents__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPartiesAndEvents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPartiesAndEvents";
  } else {
    func.displayName = `PlasmicPartiesAndEvents.${nodeName}`;
  }
  return func;
}

export const PlasmicPartiesAndEvents = Object.assign(
  // Top-level PlasmicPartiesAndEvents renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    verticalMenu: makeNodeComponent("verticalMenu"),
    navstack: makeNodeComponent("navstack"),
    navigation: makeNodeComponent("navigation"),
    locationPicker: makeNodeComponent("locationPicker"),
    heroParties: makeNodeComponent("heroParties"),
    pageZoneRenderer: makeNodeComponent("pageZoneRenderer"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPartiesAndEvents
    internalVariantProps: PlasmicPartiesAndEvents__VariantProps,
    internalArgProps: PlasmicPartiesAndEvents__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPartiesAndEvents;
/* prettier-ignore-end */
