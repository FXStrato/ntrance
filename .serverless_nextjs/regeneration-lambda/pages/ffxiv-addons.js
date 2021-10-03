/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 79406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ffxiv_addons),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/react/dist/esm/index.js
var esm = __webpack_require__(40980);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/table/dist/esm/table.js
var table = __webpack_require__(83346);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/flex.js
var flex = __webpack_require__(94096);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/link.js
var esm_link = __webpack_require__(49444);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/button/dist/esm/button.js + 6 modules
var esm_button = __webpack_require__(36237);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/text.js
var esm_text = __webpack_require__(64115);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/spacer.js
var spacer = __webpack_require__(87341);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/box.js
var box = __webpack_require__(48017);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js + 1 modules
var simple_grid = __webpack_require__(43663);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/center.js
var center = __webpack_require__(38448);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/stack.js + 1 modules
var stack = __webpack_require__(86034);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/avatar/dist/esm/avatar.js + 1 modules
var avatar = __webpack_require__(91428);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/heading.js
var heading = __webpack_require__(336);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/stat/dist/esm/stat.js
var stat = __webpack_require__(20628);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/accordion/dist/esm/accordion.js + 180 modules
var accordion = __webpack_require__(82776);
// EXTERNAL MODULE: ./node_modules/react-markdown/index.js + 126 modules
var react_markdown = __webpack_require__(1875);
// EXTERNAL MODULE: ./node_modules/@apollo/client/main.cjs.js
var main_cjs = __webpack_require__(44232);
;// CONCATENATED MODULE: ./components/helpers.js

/**
 * When adding a new repo, don't forget to update both repos and repoQuery
 */

const repos = ['XivAlexander', 'ffxivACTPlugin', 'ffxivMaterialUi'];
const repoQuery = main_cjs.gql`
  query GetFFXIVRepos {
    rateLimit {
      cost
      remaining
    }
    XivAlexander: repository(owner: "Soreepeong", name: "XivAlexander") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
    ffxivMaterialUi: repository(owner: "skotlex", name: "ffxiv-material-ui") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
    ffxivACTPlugin: repository(owner: "ravahn", name: "FFXIV_ACT_Plugin") {
      releases(last: 1) {
        nodes {
          author {
            login
            avatarUrl
          }
          repository {
            name
            url
          }
          publishedAt
          name
          description
          tagName
          url
          releaseAssets(first: 10) {
            nodes {
              name
              downloadUrl
              size
            }
          }
        }
      }
    }
  }
`;
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/ReleaseCard.js






const ReleaseCard = /*#__PURE__*/react.memo(props => {
  const {
    author,
    publishedAt,
    tagName,
    description,
    releaseAssets,
    repository,
    url
  } = props;
  const assets = releaseAssets.nodes.map(el => /*#__PURE__*/jsx_runtime.jsx(table.Tr, {
    children: /*#__PURE__*/jsx_runtime.jsx(table.Td, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* Flex */.k, {
        w: "full",
        wrap: "wrap",
        align: "center",
        children: [/*#__PURE__*/jsx_runtime.jsx(esm_link/* Link */.r, {
          href: el.downloadUrl,
          children: /*#__PURE__*/jsx_runtime.jsx(esm_button/* Button */.z, {
            variant: "link",
            children: /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
              isTruncated: true,
              children: el.name
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx(spacer/* Spacer */.L, {}), /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
          fontSize: "sm",
          children: formatBytes(el.size)
        })]
      })
    })
  }, `tr-${el.name}`));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(box/* Box */.xu, {
    mb: 2,
    boxShadow: 'xl',
    rounded: 'lg',
    bg: (0,esm.useColorModeValue)('white', 'gray.900'),
    p: 6,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(simple_grid/* SimpleGrid */.M, {
      w: 'full',
      columns: {
        sm: 1,
        md: 2
      },
      spacing: 5,
      mb: 4,
      children: [/*#__PURE__*/jsx_runtime.jsx(center/* Center */.M, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(stack/* VStack */.gC, {
          spacing: 0,
          children: [/*#__PURE__*/jsx_runtime.jsx(avatar/* Avatar */.qE, {
            size: 'lg',
            src: author.avatarUrl,
            alt: 'Avatar Alt',
            mb: 2
          }), /*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
            fontSize: 'lg',
            fontFamily: 'body',
            children: /*#__PURE__*/jsx_runtime.jsx(esm_link/* Link */.r, {
              href: repository.url,
              target: "_blank",
              children: repository.name
            })
          }), /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
            color: 'gray.500',
            mb: 4,
            children: author.login
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx(center/* Center */.M, {
        children: /*#__PURE__*/jsx_runtime.jsx(stack/* VStack */.gC, {
          w: "full",
          spacing: 2,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(stat/* StatGroup */.pr, {
            w: "full",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(stat/* Stat */.kN, {
              children: [/*#__PURE__*/jsx_runtime.jsx(stat/* StatLabel */.dw, {
                children: "Version"
              }), /*#__PURE__*/jsx_runtime.jsx(stat/* StatHelpText */.vh, {
                children: /*#__PURE__*/jsx_runtime.jsx(esm_link/* Link */.r, {
                  href: url,
                  target: "_blank",
                  children: tagName
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(stat/* Stat */.kN, {
              children: [/*#__PURE__*/jsx_runtime.jsx(stat/* StatLabel */.dw, {
                children: "Published"
              }), /*#__PURE__*/jsx_runtime.jsx(stat/* StatHelpText */.vh, {
                children: new Date(publishedAt).toDateString()
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(table/* Table */.iA, {
      variant: "simple",
      size: "sm",
      p: 2,
      mb: 5,
      children: /*#__PURE__*/jsx_runtime.jsx(table/* Tbody */.p3, {
        children: assets
      })
    }), /*#__PURE__*/jsx_runtime.jsx(accordion/* Accordion */.UQ, {
      allowToggle: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(accordion/* AccordionItem */.Qd, {
        border: "none",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(accordion/* AccordionButton */.KF, {
            children: [/*#__PURE__*/jsx_runtime.jsx(box/* Box */.xu, {
              flex: "1",
              textAlign: "left",
              children: "Changelog"
            }), /*#__PURE__*/jsx_runtime.jsx(accordion/* AccordionIcon */.XE, {})]
          })
        }), /*#__PURE__*/jsx_runtime.jsx(accordion/* AccordionPanel */.Hk, {
          pb: 4,
          children: /*#__PURE__*/jsx_runtime.jsx(react_markdown/* default */.Z, {
            children: description
          })
        })]
      })
    })]
  });
});
ReleaseCard.displayName = 'ReleaseCard';
/* harmony default export */ const components_ReleaseCard = (ReleaseCard);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/breadcrumb/dist/esm/breadcrumb.js
var breadcrumb = __webpack_require__(75658);
// EXTERNAL MODULE: ./node_modules/@chakra-ui/layout/dist/esm/container.js
var container = __webpack_require__(53850);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(35063);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/context/context.cjs.js
var context_cjs = __webpack_require__(24365);
// EXTERNAL MODULE: ./node_modules/@apollo/client/link/error/error.cjs.js
var error_cjs = __webpack_require__(96206);
;// CONCATENATED MODULE: ./src/server/apollo-client.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const httpLink = (0,main_cjs.createHttpLink)({
  uri: 'https://api.github.com/graphql'
});
const errorLink = (0,error_cjs/* onError */.qQ)(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) graphQLErrors.forEach(({
    message,
    locations,
    path
  }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  if (networkError) console.error(networkError);
});
const authLink = (0,context_cjs/* setContext */.v)((_, {
  headers
}) => {
  // get the authentication token from local storage if it exists
  const token = process.env.GITHUB_TOKEN; // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `Bearer ${token}` : ''
    })
  };
});
const client = new main_cjs.ApolloClient({
  ssrMode: true,
  link: (0,main_cjs.from)([errorLink, authLink, httpLink]),
  cache: new main_cjs.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);
;// CONCATENATED MODULE: ./pages/ffxiv-addons/index.js
function ffxiv_addons_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ffxiv_addons_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ffxiv_addons_ownKeys(Object(source), true).forEach(function (key) { ffxiv_addons_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ffxiv_addons_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ffxiv_addons_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const FFXIVAddons = /*#__PURE__*/react.memo(({
  data
}) => {
  const {
    0: cards,
    1: setCards
  } = (0,react.useState)();
  (0,react.useEffect)(() => {
    if (data && !data.errorType) {
      let cards = [];
      repos.map(repo => {
        var _el$releases;

        const el = data[repo];

        if (el !== null && el !== void 0 && (_el$releases = el.releases) !== null && _el$releases !== void 0 && _el$releases.nodes[0]) {
          cards.push( /*#__PURE__*/jsx_runtime.jsx(components_ReleaseCard, ffxiv_addons_objectSpread({}, el.releases.nodes[0])));
        }
      });
      setCards(cards);
    } else {
      setCards( /*#__PURE__*/jsx_runtime.jsx(center/* Center */.M, {
        children: /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
          color: "red.600",
          children: "An error occurred querying for the repositories"
        })
      }));
      if ((data === null || data === void 0 ? void 0 : data.errorType) === 'network') console.error(`Network error querying repos: ${data.statusCode}`);
      if ((data === null || data === void 0 ? void 0 : data.errorType) === 'graphQL') console.error(`GraphQL error(s) querying repos`);
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: "FFXIV Addons"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Tracks latest versions of specific ffxiv related github repositories"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime.jsx(center/* Center */.M, {
        textAlign: "center",
        h: "10rem",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(stack/* VStack */.gC, {
          spacing: 4,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(breadcrumb/* Breadcrumb */.aG, {
            w: "full",
            textAlign: "left",
            mb: 2,
            children: [/*#__PURE__*/jsx_runtime.jsx(breadcrumb/* BreadcrumbItem */.gN, {
              children: /*#__PURE__*/jsx_runtime.jsx(breadcrumb/* BreadcrumbLink */.At, {
                children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
                  href: "/",
                  children: /*#__PURE__*/jsx_runtime.jsx("a", {
                    children: "Home"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime.jsx(breadcrumb/* BreadcrumbItem */.gN, {
              isCurrentPage: true,
              children: /*#__PURE__*/jsx_runtime.jsx(breadcrumb/* BreadcrumbLink */.At, {
                children: "FFXIV-Addons"
              })
            })]
          }), /*#__PURE__*/jsx_runtime.jsx(heading/* Heading */.X, {
            fontSize: 'xl',
            children: "FFXIV Addons"
          }), /*#__PURE__*/jsx_runtime.jsx(esm_text/* Text */.x, {
            fontWeight: 500,
            children: "Tracker for specific FFXIV related repositories so I don't have to go to each individual one"
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx(container/* Container */.W, {
        maxW: "2xl",
        children: /*#__PURE__*/jsx_runtime.jsx(simple_grid/* SimpleGrid */.M, {
          columns: 1,
          spacing: 3,
          children: cards
        })
      })]
    })]
  });
});
FFXIVAddons.displayName = 'FFXIVAddons';
async function getServerSideProps(context) {
  var _req$headers$cookie;

  let data = null; // Comment this to the end of the if statement when doing local dev

  const r = await apollo_client.query({
    query: repoQuery
  }).then(res => res).catch(err => err);

  if (r.networkError) {
    data = {
      statusCode: r.networkError.statusCode,
      errorType: 'network'
    };
  } else if (r.graphQLErrors) {
    data = {
      errorType: 'graphQL'
    };
  } else {
    data = r.data;
    console.info(JSON.stringify(data.rateLimit));
  }

  const {
    req
  } = context;
  return {
    props: {
      data: data,
      cookies: (_req$headers$cookie = req.headers.cookie) !== null && _req$headers$cookie !== void 0 ? _req$headers$cookie : ''
    }
  };
}
/* harmony default export */ const ffxiv_addons = (FFXIVAddons);

/***/ }),

/***/ 80853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Chakra)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40980);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
// a) import `ChakraProvider` component as well as the storageManagers


function Chakra({
  cookies,
  children
}) {
  // b) Pass `colorModeManager` prop
  const colorModeManager = typeof cookies === 'string' && cookies ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.cookieStorageManager)(cookies) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.localStorageManager;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__/* .ChakraProvider */ .x, {
    colorModeManager: colorModeManager,
    children: children
  });
} // also export a reusable function getServerSideProps

function getServerSideProps({
  req
}) {
  var _req$headers$cookie;

  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: (_req$headers$cookie = req.headers.cookie) !== null && _req$headers$cookie !== void 0 ? _req$headers$cookie : ''
    }
  };
}

/***/ }),

/***/ 2006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"GITHUB_TOKEN=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"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(5924)

      const appMod = __webpack_require__(91936)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(79406)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/ffxiv-addons",
        buildId: "OvbkFbWCgg-nhzdccDofx",
        escapedBuildId: "OvbkFbWCgg\-nhzdccDofx",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"f4dab8e6d5af2c1f7503fffbd9f710da",previewModeSigningKey:"84dd7487ef8090a50f64d1501180a0c61bf92f4cb7219597d687d2f777250947",previewModeEncryptionKey:"178af8b9a60a20ed81c98aee94e59fa25e39dc6b911e33e3e819b42b8bbb6300"}
      })
      
    

/***/ }),

/***/ 64293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 45532:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 57211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 33700:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 61765:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 71191:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 78835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 72431:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [158,208,842,893,57,324], () => (__webpack_require__(2006)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			685: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(158);
/******/ 			__webpack_require__.e(208);
/******/ 			__webpack_require__.e(842);
/******/ 			__webpack_require__.e(893);
/******/ 			__webpack_require__.e(57);
/******/ 			__webpack_require__.e(324);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;