import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { a as offset$1, c as getOverflowAncestors, i as flip$1, o as shift$1, r as computePosition, s as size$1, t as arrow$2 } from "./dom+[...].mjs";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.8";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isLastTraversableNode(node) {
	return [
		"html",
		"body",
		"#document"
	].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
//#endregion
//#region node_modules/@floating-ui/react/utils/dist/floating-ui.react.utils.mjs
function activeElement(doc) {
	let activeElement = doc.activeElement;
	while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
		var _activeElement;
		activeElement = activeElement.shadowRoot.activeElement;
	}
	return activeElement;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	const rootNode = child.getRootNode && child.getRootNode();
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getPlatform() {
	const uaData = navigator.userAgentData;
	if (uaData != null && uaData.platform) return uaData.platform;
	return navigator.platform;
}
function getUserAgent() {
	const uaData = navigator.userAgentData;
	if (uaData && Array.isArray(uaData.brands)) return uaData.brands.map((_ref) => {
		let { brand, version } = _ref;
		return brand + "/" + version;
	}).join(" ");
	return navigator.userAgent;
}
function isVirtualClick(event) {
	if (event.mozInputSource === 0 && event.isTrusted) return true;
	if (isAndroid() && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
	return !isAndroid() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
function isSafari() {
	return /apple/i.test(navigator.vendor);
}
function isAndroid() {
	const re = /android/i;
	return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
	return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isMouseLikePointerType(pointerType, strict) {
	const values = ["mouse", "pen"];
	if (!strict) values.push("", void 0);
	return values.includes(pointerType);
}
function isReactEvent(event) {
	return "nativeEvent" in event;
}
function isRootElement(element) {
	return element.matches("html,body");
}
function getDocument(node) {
	return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
	if (node == null) return false;
	if ("composedPath" in event) return event.composedPath().includes(node);
	const e = event;
	return e.target != null && node.contains(e.target);
}
function getTarget(event) {
	if ("composedPath" in event) return event.composedPath()[0];
	return event.target;
}
function isTypeableElement(element) {
	return isHTMLElement(element) && element.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function stopEvent(event) {
	event.preventDefault();
	event.stopPropagation();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var floor = Math.floor;
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.8";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var index$1 = typeof document !== "undefined" ? import_react.useLayoutEffect : function noop() {};
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef$1(value) {
	const ref = import_react.useRef(value);
	index$1(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating$1(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = import_react.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = import_react.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = import_react.useState(null);
	const [_floating, _setFloating] = import_react.useState(null);
	const setReference = import_react.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = import_react.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = import_react.useRef(null);
	const floatingRef = import_react.useRef(null);
	const dataRef = import_react.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef$1(whileElementsMounted);
	const platformRef = useLatestRef$1(platform);
	const openRef = useLatestRef$1(open);
	const update = import_react.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				import_react_dom.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index$1(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = import_react.useRef(false);
	index$1(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index$1(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = import_react.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = import_react.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = import_react.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return import_react.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => {
	function isRef(value) {
		return {}.hasOwnProperty.call(value, "current");
	}
	return {
		name: "arrow",
		options,
		fn(state) {
			const { element, padding } = typeof options === "function" ? options(state) : options;
			if (element && isRef(element)) {
				if (element.current != null) return arrow$2({
					element: element.current,
					padding
				}).fn(state);
				return {};
			}
			if (element) return arrow$2({
				element,
				padding
			}).fn(state);
			return {};
		}
	};
};
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = (options, deps) => {
	const result = offset$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = (options, deps) => {
	const result = shift$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = (options, deps) => {
	const result = flip$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = (options, deps) => {
	const result = size$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = (options, deps) => {
	const result = arrow$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/*!
* tabbable 6.5.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelector = /* #__PURE__ */ [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
].join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
	var _element$getRootNode;
	return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
	return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
* Determines if a node is inert or in an inert ancestor.
* @param {Node} [node]
* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
*  see if any of them are inert. If false, only `node` itself is considered.
* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
*  False if `node` is falsy.
*/
var _isInert = function isInert(node, lookUp) {
	var _node$getAttribute;
	if (lookUp === void 0) lookUp = true;
	var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
	return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
};
/**
* Determines if a node's content is editable.
* @param {Element} [node]
* @returns True if it's content-editable; false if it's not or `node` is falsy.
*/
var isContentEditable = function isContentEditable(node) {
	var _node$getAttribute2;
	var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
	return attValue === "" || attValue === "true";
};
/**
* @param {Element} el container to check in
* @param {boolean} includeContainer add container to check
* @param {(node: Element) => boolean} filter filter candidates
* @returns {Element[]}
*/
var getCandidates = function getCandidates(el, includeContainer, filter) {
	if (_isInert(el)) return [];
	var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
	if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
	candidates = candidates.filter(filter);
	return candidates;
};
/**
* @callback GetShadowRoot
* @param {Element} element to check for shadow root
* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
*/
/**
* @callback ShadowRootFilter
* @param {Element} shadowHostNode the element which contains shadow content
* @returns {boolean} true if a shadow root could potentially contain valid candidates.
*/
/**
* @typedef {Object} CandidateScope
* @property {Element} scopeParent contains inner candidates
* @property {Element[]} candidates list of candidates found in the scope parent
*/
/**
* @typedef {Object} IterativeOptions
* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
*  if a function, implies shadow support is enabled and either returns the shadow root of an element
*  or a boolean stating if it has an undisclosed shadow root
* @property {(node: Element) => boolean} filter filter candidates
* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
*/
/**
* @param {Element[]} elements list of element containers to match candidates from
* @param {boolean} includeContainer add container list to check
* @param {IterativeOptions} options
* @returns {Array.<Element|CandidateScope>}
*/
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (_isInert(element, false)) continue;
		if (element.tagName === "SLOT") {
			var assigned = element.assignedElements();
			var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
			if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
			else candidates.push({
				scopeParent: element,
				candidates: nestedCandidates
			});
		} else {
			if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
			var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
			var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: _nestedCandidates
				});
			} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
		}
	}
	return candidates;
};
/**
* @private
* Determines if the node has an explicitly specified `tabindex` attribute.
* @param {HTMLElement} node
* @returns {boolean} True if so; false if not.
*/
var hasTabIndex = function hasTabIndex(node) {
	return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
/**
* Determine the tab index of a given node.
* @param {HTMLElement} node
* @returns {number} Tab order (negative, 0, or positive number).
* @throws {Error} If `node` is falsy.
*/
var getTabIndex = function getTabIndex(node) {
	if (!node) throw new Error("No node provided");
	if (node.tabIndex < 0) {
		if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
	}
	return node.tabIndex;
};
/**
* Determine the tab index of a given node __for sort order purposes__.
* @param {HTMLElement} node
* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
*  inserted into the correct sort position.
* @returns {number} Tab order (negative, 0, or positive number).
*/
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
	var tabIndex = getTabIndex(node);
	if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
	return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
	return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput(node) {
	return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
	return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
		return child.tagName === "SUMMARY";
	});
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
	for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
};
var isTabbableRadio = function isTabbableRadio(node) {
	if (!node.name) return true;
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios(name) {
		return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
	};
	var radioSet;
	if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
	else try {
		radioSet = queryRadios(node.name);
	} catch (err) {
		console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
		return false;
	}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio(node) {
	return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached(node) {
	var _nodeRoot;
	var nodeRoot = node && getRootNode(node);
	var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
	var attached = false;
	if (nodeRoot && nodeRoot !== node) {
		var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
		attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
		while (!attached && nodeRootHost) {
			var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
			nodeRoot = getRootNode(nodeRootHost);
			nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
			attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
		}
	}
	return attached;
};
var isZeroArea = function isZeroArea(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
	var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
	if (displayCheck === "full-native") {
		if ("checkVisibility" in node) return !node.checkVisibility({
			checkOpacity: false,
			opacityProperty: false,
			contentVisibilityAuto: true,
			visibilityProperty: true,
			checkVisibilityCSS: true
		});
	}
	var visibility = getComputedStyle(node).visibility;
	if (visibility === "hidden" || visibility === "collapse") return true;
	var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
	if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
	if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
		if (typeof getShadowRoot === "function") {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
				else if (node.assignedSlot) node = node.assignedSlot;
				else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
				else node = parentElement;
			}
			node = originalNode;
		}
		if (isNodeAttached(node)) return !node.getClientRects().length;
		if (displayCheck !== "legacy-full") return true;
	} else if (displayCheck === "non-zero-area") return isZeroArea(node);
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
	if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
	return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
	var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) return true;
	return false;
};
/**
* @param {Array.<Element|CandidateScope>} candidates
* @returns Element[]
*/
var _sortByOrder = function sortByOrder(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function(item, i) {
		var isScope = !!item.scopeParent;
		var element = isScope ? item.scopeParent : item;
		var candidateTabindex = getSortOrderTabIndex(element, isScope);
		var elements = isScope ? _sortByOrder(item.candidates) : element;
		if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
		else orderedTabbables.push({
			documentOrder: i,
			tabIndex: candidateTabindex,
			item,
			isScope,
			content: elements
		});
	});
	return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
		sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
		return acc;
	}, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, options),
		flatten: false,
		getShadowRoot: options.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
	return _sortByOrder(candidates);
};
//#endregion
//#region node_modules/@floating-ui/react/dist/floating-ui.react.mjs
/**
* Merges an array of refs into a single memoized callback ref or `null`.
* @see https://floating-ui.com/docs/useMergeRefs
*/
function useMergeRefs(refs) {
	return import_react.useMemo(() => {
		if (refs.every((ref) => ref == null)) return null;
		return (value) => {
			refs.forEach((ref) => {
				if (typeof ref === "function") ref(value);
				else if (ref != null) ref.current = value;
			});
		};
	}, refs);
}
var useSafeInsertionEffect = import_react[/*#__PURE__*/ "useInsertionEffect".toString()] || ((fn) => fn());
function useEffectEvent(callback) {
	const ref = import_react.useRef(() => {});
	useSafeInsertionEffect(() => {
		ref.current = callback;
	});
	return import_react.useCallback(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return ref.current == null ? void 0 : ref.current(...args);
	}, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index, cols, prevRow) {
	return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
	return index < 0 || index >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
	return findNonDisabledIndex(listRef, { disabledIndices });
}
function getMaxIndex(listRef, disabledIndices) {
	return findNonDisabledIndex(listRef, {
		decrement: true,
		startingIndex: listRef.current.length,
		disabledIndices
	});
}
function findNonDisabledIndex(listRef, _temp) {
	let { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = _temp === void 0 ? {} : _temp;
	const list = listRef.current;
	const isDisabledIndex = disabledIndices ? (index) => disabledIndices.includes(index) : (index) => {
		const element = list[index];
		return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
	};
	let index = startingIndex;
	do
		index += decrement ? -amount : amount;
	while (index >= 0 && index <= list.length - 1 && isDisabledIndex(index));
	return index;
}
function getGridNavigatedIndex(elementsRef, _ref) {
	let { event, orientation, loop, cols, disabledIndices, minIndex, maxIndex, prevIndex, stopEvent: stop = false } = _ref;
	let nextIndex = prevIndex;
	if (event.key === ARROW_UP) {
		stop && stopEvent(event);
		if (prevIndex === -1) nextIndex = maxIndex;
		else {
			nextIndex = findNonDisabledIndex(elementsRef, {
				startingIndex: nextIndex,
				amount: cols,
				decrement: true,
				disabledIndices
			});
			if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
				const col = prevIndex % cols;
				const maxCol = maxIndex % cols;
				const offset = maxIndex - (maxCol - col);
				if (maxCol === col) nextIndex = maxIndex;
				else nextIndex = maxCol > col ? offset : offset - cols;
			}
		}
		if (isIndexOutOfBounds(elementsRef, nextIndex)) nextIndex = prevIndex;
	}
	if (event.key === ARROW_DOWN) {
		stop && stopEvent(event);
		if (prevIndex === -1) nextIndex = minIndex;
		else {
			nextIndex = findNonDisabledIndex(elementsRef, {
				startingIndex: prevIndex,
				amount: cols,
				disabledIndices
			});
			if (loop && prevIndex + cols > maxIndex) nextIndex = findNonDisabledIndex(elementsRef, {
				startingIndex: prevIndex % cols - cols,
				amount: cols,
				disabledIndices
			});
		}
		if (isIndexOutOfBounds(elementsRef, nextIndex)) nextIndex = prevIndex;
	}
	if (orientation === "both") {
		const prevRow = floor(prevIndex / cols);
		if (event.key === ARROW_RIGHT) {
			stop && stopEvent(event);
			if (prevIndex % cols !== cols - 1) {
				nextIndex = findNonDisabledIndex(elementsRef, {
					startingIndex: prevIndex,
					disabledIndices
				});
				if (loop && isDifferentRow(nextIndex, cols, prevRow)) nextIndex = findNonDisabledIndex(elementsRef, {
					startingIndex: prevIndex - prevIndex % cols - 1,
					disabledIndices
				});
			} else if (loop) nextIndex = findNonDisabledIndex(elementsRef, {
				startingIndex: prevIndex - prevIndex % cols - 1,
				disabledIndices
			});
			if (isDifferentRow(nextIndex, cols, prevRow)) nextIndex = prevIndex;
		}
		if (event.key === ARROW_LEFT) {
			stop && stopEvent(event);
			if (prevIndex % cols !== 0) {
				nextIndex = findNonDisabledIndex(elementsRef, {
					startingIndex: prevIndex,
					disabledIndices,
					decrement: true
				});
				if (loop && isDifferentRow(nextIndex, cols, prevRow)) nextIndex = findNonDisabledIndex(elementsRef, {
					startingIndex: prevIndex + (cols - prevIndex % cols),
					decrement: true,
					disabledIndices
				});
			} else if (loop) nextIndex = findNonDisabledIndex(elementsRef, {
				startingIndex: prevIndex + (cols - prevIndex % cols),
				decrement: true,
				disabledIndices
			});
			if (isDifferentRow(nextIndex, cols, prevRow)) nextIndex = prevIndex;
		}
		const lastRow = floor(maxIndex / cols) === prevRow;
		if (isIndexOutOfBounds(elementsRef, nextIndex)) {
			if (loop && lastRow) nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
				startingIndex: prevIndex - prevIndex % cols - 1,
				disabledIndices
			});
			else nextIndex = prevIndex;
		}
	}
	return nextIndex;
}
var rafId = 0;
function enqueueFocus(el, options) {
	if (options === void 0) options = {};
	const { preventScroll = false, cancelPrevious = true, sync = false } = options;
	cancelPrevious && cancelAnimationFrame(rafId);
	const exec = () => el == null ? void 0 : el.focus({ preventScroll });
	if (sync) exec();
	else rafId = requestAnimationFrame(exec);
}
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function sortByDocumentPosition(a, b) {
	const position = a.compareDocumentPosition(b);
	if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
	if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) return 1;
	return 0;
}
function areMapsEqual(map1, map2) {
	if (map1.size !== map2.size) return false;
	for (const [key, value] of map1.entries()) if (value !== map2.get(key)) return false;
	return true;
}
var FloatingListContext = /*#__PURE__*/ import_react.createContext({
	register: () => {},
	unregister: () => {},
	map: /*#__PURE__*/ new Map(),
	elementsRef: { current: [] }
});
/**
* Provides context for a list of items within the floating element.
* @see https://floating-ui.com/docs/FloatingList
*/
function FloatingList(_ref) {
	let { children, elementsRef, labelsRef } = _ref;
	const [map, setMap] = import_react.useState(() => /* @__PURE__ */ new Map());
	const register = import_react.useCallback((node) => {
		setMap((prevMap) => new Map(prevMap).set(node, null));
	}, []);
	const unregister = import_react.useCallback((node) => {
		setMap((prevMap) => {
			const map = new Map(prevMap);
			map.delete(node);
			return map;
		});
	}, []);
	index(() => {
		const newMap = new Map(map);
		Array.from(newMap.keys()).sort(sortByDocumentPosition).forEach((node, index) => {
			newMap.set(node, index);
		});
		if (!areMapsEqual(map, newMap)) setMap(newMap);
	}, [map]);
	return /*#__PURE__*/ import_react.createElement(FloatingListContext.Provider, { value: import_react.useMemo(() => ({
		register,
		unregister,
		map,
		elementsRef,
		labelsRef
	}), [
		register,
		unregister,
		map,
		elementsRef,
		labelsRef
	]) }, children);
}
function useListItem(_temp) {
	let { label } = _temp === void 0 ? {} : _temp;
	const [index$1, setIndex] = import_react.useState(null);
	const componentRef = import_react.useRef(null);
	const { register, unregister, map, elementsRef, labelsRef } = import_react.useContext(FloatingListContext);
	const ref = import_react.useCallback((node) => {
		componentRef.current = node;
		if (index$1 !== null) {
			elementsRef.current[index$1] = node;
			if (labelsRef) {
				var _node$textContent;
				const isLabelDefined = label !== void 0;
				labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
			}
		}
	}, [
		index$1,
		elementsRef,
		labelsRef,
		label
	]);
	index(() => {
		const node = componentRef.current;
		if (node) {
			register(node);
			return () => {
				unregister(node);
			};
		}
	}, [register, unregister]);
	index(() => {
		const index = componentRef.current ? map.get(componentRef.current) : null;
		if (index != null) setIndex(index);
	}, [map]);
	return import_react.useMemo(() => ({
		ref,
		index: index$1 == null ? -1 : index$1
	}), [index$1, ref]);
}
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
[...horizontalKeys, ...verticalKeys];
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
	const [id, setId] = import_react.useState(() => serverHandoffComplete ? genId() : void 0);
	index(() => {
		if (id == null) setId(genId());
	}, []);
	import_react.useEffect(() => {
		if (!serverHandoffComplete) serverHandoffComplete = true;
	}, []);
	return id;
}
/**
* Uses React 18's built-in `useId()` when available, or falls back to a
* slightly less performant (requiring a double render) implementation for
* earlier React versions.
* @see https://floating-ui.com/docs/useId
*/
var useId = import_react[/*#__PURE__*/ "useId".toString()] || useFloatingId;
function createPubSub() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			var _map$get;
			(_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
		},
		on(event, listener) {
			map.set(event, [...map.get(event) || [], listener]);
		},
		off(event, listener) {
			var _map$get2;
			map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
		}
	};
}
var FloatingNodeContext = /*#__PURE__*/ import_react.createContext(null);
var FloatingTreeContext = /*#__PURE__*/ import_react.createContext(null);
var useFloatingParentNodeId = () => {
	var _React$useContext;
	return ((_React$useContext = import_react.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => import_react.useContext(FloatingTreeContext);
/**
* Registers a node into the floating tree, returning its id.
*/
function useFloatingNodeId(customParentId) {
	const id = useId();
	const tree = useFloatingTree();
	const reactParentId = useFloatingParentNodeId();
	const parentId = customParentId || reactParentId;
	index(() => {
		const node = {
			id,
			parentId
		};
		tree?.addNode(node);
		return () => {
			tree?.removeNode(node);
		};
	}, [
		tree,
		id,
		parentId
	]);
	return id;
}
/**
* Provides parent node context for nested floating elements.
* @see https://floating-ui.com/docs/FloatingTree
*/
function FloatingNode(_ref) {
	let { children, id } = _ref;
	const parentId = useFloatingParentNodeId();
	return /*#__PURE__*/ import_react.createElement(FloatingNodeContext.Provider, { value: import_react.useMemo(() => ({
		id,
		parentId
	}), [id, parentId]) }, children);
}
/**
* Provides context for nested floating elements when they are not children of
* each other on the DOM (i.e. portalled to a common node, rather than their
* respective parent).
* @see https://floating-ui.com/docs/FloatingTree
*/
function FloatingTree(_ref2) {
	let { children } = _ref2;
	const nodesRef = import_react.useRef([]);
	const addNode = import_react.useCallback((node) => {
		nodesRef.current = [...nodesRef.current, node];
	}, []);
	const removeNode = import_react.useCallback((node) => {
		nodesRef.current = nodesRef.current.filter((n) => n !== node);
	}, []);
	const events = import_react.useState(() => createPubSub())[0];
	return /*#__PURE__*/ import_react.createElement(FloatingTreeContext.Provider, { value: import_react.useMemo(() => ({
		nodesRef,
		addNode,
		removeNode,
		events
	}), [
		nodesRef,
		addNode,
		removeNode,
		events
	]) }, children);
}
function createAttribute(name) {
	return "data-floating-ui-" + name;
}
function useLatestRef(value) {
	const ref = (0, import_react.useRef)(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
var safePolygonIdentifier = /*#__PURE__*/ createAttribute("safe-polygon");
function getDelay(value, prop, pointerType) {
	if (pointerType && !isMouseLikePointerType(pointerType)) return 0;
	if (typeof value === "number") return value;
	return value == null ? void 0 : value[prop];
}
/**
* Opens the floating element while hovering over the reference element, like
* CSS `:hover`.
* @see https://floating-ui.com/docs/useHover
*/
function useHover(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, dataRef, events, elements: { domReference, floating }, refs } = context;
	const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true } = props;
	const tree = useFloatingTree();
	const parentId = useFloatingParentNodeId();
	const handleCloseRef = useLatestRef(handleClose);
	const delayRef = useLatestRef(delay);
	const pointerTypeRef = import_react.useRef();
	const timeoutRef = import_react.useRef();
	const handlerRef = import_react.useRef();
	const restTimeoutRef = import_react.useRef();
	const blockMouseMoveRef = import_react.useRef(true);
	const performedPointerEventsMutationRef = import_react.useRef(false);
	const unbindMouseMoveRef = import_react.useRef(() => {});
	const isHoverOpen = import_react.useCallback(() => {
		var _dataRef$current$open;
		const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
		return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
	}, [dataRef]);
	import_react.useEffect(() => {
		if (!enabled) return;
		function onOpenChange(_ref) {
			let { open } = _ref;
			if (!open) {
				clearTimeout(timeoutRef.current);
				clearTimeout(restTimeoutRef.current);
				blockMouseMoveRef.current = true;
			}
		}
		events.on("openchange", onOpenChange);
		return () => {
			events.off("openchange", onOpenChange);
		};
	}, [enabled, events]);
	import_react.useEffect(() => {
		if (!enabled || !handleCloseRef.current || !open) return;
		function onLeave(event) {
			if (isHoverOpen()) onOpenChange(false, event, "hover");
		}
		const html = getDocument(floating).documentElement;
		html.addEventListener("mouseleave", onLeave);
		return () => {
			html.removeEventListener("mouseleave", onLeave);
		};
	}, [
		floating,
		open,
		onOpenChange,
		enabled,
		handleCloseRef,
		dataRef,
		isHoverOpen
	]);
	const closeWithDelay = import_react.useCallback(function(event, runElseBranch, reason) {
		if (runElseBranch === void 0) runElseBranch = true;
		if (reason === void 0) reason = "hover";
		const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
		if (closeDelay && !handlerRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => onOpenChange(false, event, reason), closeDelay);
		} else if (runElseBranch) {
			clearTimeout(timeoutRef.current);
			onOpenChange(false, event, reason);
		}
	}, [delayRef, onOpenChange]);
	const cleanupMouseMoveHandler = import_react.useCallback(() => {
		unbindMouseMoveRef.current();
		handlerRef.current = void 0;
	}, []);
	const clearPointerEvents = import_react.useCallback(() => {
		if (performedPointerEventsMutationRef.current) {
			const body = getDocument(refs.floating.current).body;
			body.style.pointerEvents = "";
			body.removeAttribute(safePolygonIdentifier);
			performedPointerEventsMutationRef.current = false;
		}
	}, [refs]);
	import_react.useEffect(() => {
		if (!enabled) return;
		function isClickLikeOpenEvent() {
			return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
		}
		function onMouseEnter(event) {
			clearTimeout(timeoutRef.current);
			blockMouseMoveRef.current = false;
			if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) return;
			const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
			if (openDelay) timeoutRef.current = setTimeout(() => {
				onOpenChange(true, event, "hover");
			}, openDelay);
			else onOpenChange(true, event, "hover");
		}
		function onMouseLeave(event) {
			if (isClickLikeOpenEvent()) return;
			unbindMouseMoveRef.current();
			const doc = getDocument(floating);
			clearTimeout(restTimeoutRef.current);
			if (handleCloseRef.current) {
				if (!open) clearTimeout(timeoutRef.current);
				handlerRef.current = handleCloseRef.current({
					...context,
					tree,
					x: event.clientX,
					y: event.clientY,
					onClose() {
						clearPointerEvents();
						cleanupMouseMoveHandler();
						closeWithDelay(event, true, "safe-polygon");
					}
				});
				const handler = handlerRef.current;
				doc.addEventListener("mousemove", handler);
				unbindMouseMoveRef.current = () => {
					doc.removeEventListener("mousemove", handler);
				};
				return;
			}
			if (pointerTypeRef.current === "touch" ? !contains(floating, event.relatedTarget) : true) closeWithDelay(event);
		}
		function onScrollMouseLeave(event) {
			if (isClickLikeOpenEvent()) return;
			handleCloseRef.current == null || handleCloseRef.current({
				...context,
				tree,
				x: event.clientX,
				y: event.clientY,
				onClose() {
					clearPointerEvents();
					cleanupMouseMoveHandler();
					closeWithDelay(event);
				}
			})(event);
		}
		if (isElement(domReference)) {
			const ref = domReference;
			open && ref.addEventListener("mouseleave", onScrollMouseLeave);
			floating?.addEventListener("mouseleave", onScrollMouseLeave);
			move && ref.addEventListener("mousemove", onMouseEnter, { once: true });
			ref.addEventListener("mouseenter", onMouseEnter);
			ref.addEventListener("mouseleave", onMouseLeave);
			return () => {
				open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
				floating?.removeEventListener("mouseleave", onScrollMouseLeave);
				move && ref.removeEventListener("mousemove", onMouseEnter);
				ref.removeEventListener("mouseenter", onMouseEnter);
				ref.removeEventListener("mouseleave", onMouseLeave);
			};
		}
	}, [
		domReference,
		floating,
		enabled,
		context,
		mouseOnly,
		restMs,
		move,
		closeWithDelay,
		cleanupMouseMoveHandler,
		clearPointerEvents,
		onOpenChange,
		open,
		tree,
		delayRef,
		handleCloseRef,
		dataRef
	]);
	index(() => {
		var _handleCloseRef$curre;
		if (!enabled) return;
		if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
			const body = getDocument(floating).body;
			body.setAttribute(safePolygonIdentifier, "");
			body.style.pointerEvents = "none";
			performedPointerEventsMutationRef.current = true;
			if (isElement(domReference) && floating) {
				var _tree$nodesRef$curren;
				const ref = domReference;
				const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
				if (parentFloating) parentFloating.style.pointerEvents = "";
				ref.style.pointerEvents = "auto";
				floating.style.pointerEvents = "auto";
				return () => {
					ref.style.pointerEvents = "";
					floating.style.pointerEvents = "";
				};
			}
		}
	}, [
		enabled,
		open,
		parentId,
		floating,
		domReference,
		tree,
		handleCloseRef,
		dataRef,
		isHoverOpen
	]);
	index(() => {
		if (!open) {
			pointerTypeRef.current = void 0;
			cleanupMouseMoveHandler();
			clearPointerEvents();
		}
	}, [
		open,
		cleanupMouseMoveHandler,
		clearPointerEvents
	]);
	import_react.useEffect(() => {
		return () => {
			cleanupMouseMoveHandler();
			clearTimeout(timeoutRef.current);
			clearTimeout(restTimeoutRef.current);
			clearPointerEvents();
		};
	}, [
		enabled,
		domReference,
		cleanupMouseMoveHandler,
		clearPointerEvents
	]);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		function setPointerRef(event) {
			pointerTypeRef.current = event.pointerType;
		}
		return {
			reference: {
				onPointerDown: setPointerRef,
				onPointerEnter: setPointerRef,
				onMouseMove(event) {
					if (open || restMs === 0) return;
					clearTimeout(restTimeoutRef.current);
					restTimeoutRef.current = setTimeout(() => {
						if (!blockMouseMoveRef.current) onOpenChange(true, event.nativeEvent, "hover");
					}, restMs);
				}
			},
			floating: {
				onMouseEnter() {
					clearTimeout(timeoutRef.current);
				},
				onMouseLeave(event) {
					closeWithDelay(event.nativeEvent, false);
				}
			}
		};
	}, [
		enabled,
		restMs,
		open,
		onOpenChange,
		closeWithDelay
	]);
}
function getAncestors(nodes, id) {
	var _nodes$find;
	let allAncestors = [];
	let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
	while (currentParentId) {
		const currentNode = nodes.find((node) => node.id === currentParentId);
		currentParentId = currentNode == null ? void 0 : currentNode.parentId;
		if (currentNode) allAncestors = allAncestors.concat(currentNode);
	}
	return allAncestors;
}
function getChildren(nodes, id) {
	let allChildren = nodes.filter((node) => {
		var _node$context;
		return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
	});
	let currentChildren = allChildren;
	while (currentChildren.length) {
		currentChildren = nodes.filter((node) => {
			var _currentChildren;
			return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
				var _node$context2;
				return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
			});
		});
		allChildren = allChildren.concat(currentChildren);
	}
	return allChildren;
}
function getDeepestNode(nodes, id) {
	let deepestNodeId;
	let maxDepth = -1;
	function findDeepest(nodeId, depth) {
		if (depth > maxDepth) {
			deepestNodeId = nodeId;
			maxDepth = depth;
		}
		getChildren(nodes, nodeId).forEach((child) => {
			findDeepest(child.id, depth + 1);
		});
	}
	findDeepest(id, 0);
	return nodes.find((node) => node.id === deepestNodeId);
}
var counterMap = /*#__PURE__*/ new WeakMap();
var uncontrolledElementsSet = /*#__PURE__*/ new WeakSet();
var markerMap = {};
var lockCount = 0;
var supportsInert = () => typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
var unwrapHost = (node) => node && (node.host || unwrapHost(node.parentNode));
var correctElements = (parent, targets) => targets.map((target) => {
	if (parent.contains(target)) return target;
	const correctedTarget = unwrapHost(target);
	if (parent.contains(correctedTarget)) return correctedTarget;
	return null;
}).filter((x) => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
	const markerName = "data-floating-ui-inert";
	const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
	const avoidElements = correctElements(body, uncorrectedAvoidElements);
	const elementsToKeep = /* @__PURE__ */ new Set();
	const elementsToStop = new Set(avoidElements);
	const hiddenElements = [];
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	const markerCounter = markerMap[markerName];
	avoidElements.forEach(keep);
	deep(body);
	elementsToKeep.clear();
	function keep(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		el.parentNode && keep(el.parentNode);
	}
	function deep(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, (node) => {
			if (elementsToKeep.has(node)) deep(node);
			else {
				const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
				const alreadyHidden = attr !== null && attr !== "false";
				const counterValue = (counterMap.get(node) || 0) + 1;
				const markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenElements.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledElementsSet.add(node);
				if (markerValue === 1) node.setAttribute(markerName, "");
				if (!alreadyHidden && controlAttribute) node.setAttribute(controlAttribute, "true");
			}
		});
	}
	lockCount++;
	return () => {
		hiddenElements.forEach((element) => {
			const counterValue = (counterMap.get(element) || 0) - 1;
			const markerValue = (markerCounter.get(element) || 0) - 1;
			counterMap.set(element, counterValue);
			markerCounter.set(element, markerValue);
			if (!counterValue) {
				if (!uncontrolledElementsSet.has(element) && controlAttribute) element.removeAttribute(controlAttribute);
				uncontrolledElementsSet.delete(element);
			}
			if (!markerValue) element.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
			markerMap = {};
		}
	};
}
function markOthers(avoidElements, ariaHidden, inert) {
	if (ariaHidden === void 0) ariaHidden = false;
	if (inert === void 0) inert = false;
	const body = getDocument(avoidElements[0]).body;
	return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll("[aria-live]"))), body, ariaHidden, inert);
}
var getTabbableOptions = () => ({
	getShadowRoot: true,
	displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function getTabbableIn(container, direction) {
	const allTabbable = tabbable(container, getTabbableOptions());
	if (direction === "prev") allTabbable.reverse();
	const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
	return allTabbable.slice(activeIndex + 1)[0];
}
function getNextTabbable() {
	return getTabbableIn(document.body, "next");
}
function getPreviousTabbable() {
	return getTabbableIn(document.body, "prev");
}
function isOutsideEvent(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
	tabbable(container, getTabbableOptions()).forEach((element) => {
		element.dataset.tabindex = element.getAttribute("tabindex") || "";
		element.setAttribute("tabindex", "-1");
	});
}
function enableFocusInside(container) {
	container.querySelectorAll("[data-tabindex]").forEach((element) => {
		const tabindex = element.dataset.tabindex;
		delete element.dataset.tabindex;
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	});
}
var HIDDEN_STYLES = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "fixed",
	whiteSpace: "nowrap",
	width: "1px",
	top: 0,
	left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
	if (event.key === "Tab") {
		event.target;
		clearTimeout(timeoutId);
	}
}
var FocusGuard = /*#__PURE__*/ import_react.forwardRef(function FocusGuard(props, ref) {
	const [role, setRole] = import_react.useState();
	index(() => {
		if (isSafari()) setRole("button");
		document.addEventListener("keydown", setActiveElementOnTab);
		return () => {
			document.removeEventListener("keydown", setActiveElementOnTab);
		};
	}, []);
	const restProps = {
		ref,
		tabIndex: 0,
		role,
		"aria-hidden": role ? void 0 : true,
		[createAttribute("focus-guard")]: "",
		style: HIDDEN_STYLES
	};
	return /*#__PURE__*/ import_react.createElement("span", _extends({}, props, restProps));
});
var PortalContext = /*#__PURE__*/ import_react.createContext(null);
function useFloatingPortalNode(_temp) {
	let { id, root } = _temp === void 0 ? {} : _temp;
	const [portalNode, setPortalNode] = import_react.useState(null);
	const uniqueId = useId();
	const portalContext = usePortalContext();
	const data = import_react.useMemo(() => ({
		id,
		root,
		portalContext,
		uniqueId
	}), [
		id,
		root,
		portalContext,
		uniqueId
	]);
	const dataRef = import_react.useRef();
	index(() => {
		return () => {
			portalNode?.remove();
		};
	}, [portalNode, data]);
	index(() => {
		if (dataRef.current === data) return;
		dataRef.current = data;
		const { id, root, portalContext, uniqueId } = data;
		const existingIdRoot = id ? document.getElementById(id) : null;
		const attr = createAttribute("portal");
		if (existingIdRoot) {
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			existingIdRoot.appendChild(subRoot);
			setPortalNode(subRoot);
		} else {
			let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
			if (container && !isElement(container)) container = container.current;
			container = container || document.body;
			let idWrapper = null;
			if (id) {
				idWrapper = document.createElement("div");
				idWrapper.id = id;
				container.appendChild(idWrapper);
			}
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			container = idWrapper || container;
			container.appendChild(subRoot);
			setPortalNode(subRoot);
		}
	}, [data]);
	return portalNode;
}
/**
* Portals the floating element into a given container element — by default,
* outside of the app root and into the body.
* @see https://floating-ui.com/docs/FloatingPortal
*/
function FloatingPortal(_ref) {
	let { children, id, root = null, preserveTabOrder = true } = _ref;
	const portalNode = useFloatingPortalNode({
		id,
		root
	});
	const [focusManagerState, setFocusManagerState] = import_react.useState(null);
	const beforeOutsideRef = import_react.useRef(null);
	const afterOutsideRef = import_react.useRef(null);
	const beforeInsideRef = import_react.useRef(null);
	const afterInsideRef = import_react.useRef(null);
	const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && preserveTabOrder && !!(root || portalNode);
	import_react.useEffect(() => {
		if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) return;
		function onFocus(event) {
			if (portalNode && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(portalNode);
		}
		portalNode.addEventListener("focusin", onFocus, true);
		portalNode.addEventListener("focusout", onFocus, true);
		return () => {
			portalNode.removeEventListener("focusin", onFocus, true);
			portalNode.removeEventListener("focusout", onFocus, true);
		};
	}, [
		portalNode,
		preserveTabOrder,
		focusManagerState == null ? void 0 : focusManagerState.modal
	]);
	return /*#__PURE__*/ import_react.createElement(PortalContext.Provider, { value: import_react.useMemo(() => ({
		preserveTabOrder,
		beforeOutsideRef,
		afterOutsideRef,
		beforeInsideRef,
		afterInsideRef,
		portalNode,
		setFocusManagerState
	}), [preserveTabOrder, portalNode]) }, shouldRenderGuards && portalNode && /*#__PURE__*/ import_react.createElement(FocusGuard, {
		"data-type": "outside",
		ref: beforeOutsideRef,
		onFocus: (event) => {
			if (isOutsideEvent(event, portalNode)) {
				var _beforeInsideRef$curr;
				(_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
			} else (getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current))?.focus();
		}
	}), shouldRenderGuards && portalNode && /*#__PURE__*/ import_react.createElement("span", {
		"aria-owns": portalNode.id,
		style: HIDDEN_STYLES
	}), portalNode && /*#__PURE__*/ (0, import_react_dom.createPortal)(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/ import_react.createElement(FocusGuard, {
		"data-type": "outside",
		ref: afterOutsideRef,
		onFocus: (event) => {
			if (isOutsideEvent(event, portalNode)) {
				var _afterInsideRef$curre;
				(_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
			} else {
				(getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current))?.focus();
				focusManagerState != null && focusManagerState.closeOnFocusOut && focusManagerState?.onOpenChange(false, event.nativeEvent);
			}
		}
	}));
}
var usePortalContext = () => import_react.useContext(PortalContext);
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
	previouslyFocusedElements = previouslyFocusedElements.filter((el) => el.isConnected);
	if (element && getNodeName(element) !== "body") {
		previouslyFocusedElements.push(element);
		if (previouslyFocusedElements.length > LIST_LIMIT) previouslyFocusedElements = previouslyFocusedElements.slice(-20);
	}
}
function getPreviouslyFocusedElement() {
	return previouslyFocusedElements.slice().reverse().find((el) => el.isConnected);
}
var VisuallyHiddenDismiss = /*#__PURE__*/ import_react.forwardRef(function VisuallyHiddenDismiss(props, ref) {
	return /*#__PURE__*/ import_react.createElement("button", _extends({}, props, {
		type: "button",
		ref,
		tabIndex: -1,
		style: HIDDEN_STYLES
	}));
});
/**
* Provides focus management for the floating element.
* @see https://floating-ui.com/docs/FloatingFocusManager
*/
function FloatingFocusManager(props) {
	const { context, children, disabled = false, order = ["content"], guards: _guards = true, initialFocus = 0, returnFocus = true, modal: originalModal = true, visuallyHiddenDismiss = false, closeOnFocusOut = true } = props;
	const { open, refs, nodeId, onOpenChange, events, dataRef, elements: { domReference, floating } } = context;
	const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
	const isUntrappedTypeableCombobox = (domReference == null ? void 0 : domReference.getAttribute("role")) === "combobox" && isTypeableElement(domReference) && ignoreInitialFocus;
	const modal = isUntrappedTypeableCombobox ? false : originalModal;
	const guards = supportsInert() ? _guards : true;
	const orderRef = useLatestRef(order);
	const initialFocusRef = useLatestRef(initialFocus);
	const returnFocusRef = useLatestRef(returnFocus);
	const tree = useFloatingTree();
	const portalContext = usePortalContext();
	const startDismissButtonRef = import_react.useRef(null);
	const endDismissButtonRef = import_react.useRef(null);
	const preventReturnFocusRef = import_react.useRef(false);
	const isPointerDownRef = import_react.useRef(false);
	const isInsidePortal = portalContext != null;
	const getTabbableContent = import_react.useCallback(function(container) {
		if (container === void 0) container = floating;
		return container ? tabbable(container, getTabbableOptions()) : [];
	}, [floating]);
	const getTabbableElements = import_react.useCallback((container) => {
		const content = getTabbableContent(container);
		return orderRef.current.map((type) => {
			if (domReference && type === "reference") return domReference;
			if (floating && type === "floating") return floating;
			return content;
		}).filter(Boolean).flat();
	}, [
		domReference,
		floating,
		orderRef,
		getTabbableContent
	]);
	import_react.useEffect(() => {
		if (disabled || !modal) return;
		function onKeyDown(event) {
			if (event.key === "Tab") {
				if (contains(floating, activeElement(getDocument(floating))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) stopEvent(event);
				const els = getTabbableElements();
				const target = getTarget(event);
				if (orderRef.current[0] === "reference" && target === domReference) {
					stopEvent(event);
					if (event.shiftKey) enqueueFocus(els[els.length - 1]);
					else enqueueFocus(els[1]);
				}
				if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
					stopEvent(event);
					enqueueFocus(els[0]);
				}
			}
		}
		const doc = getDocument(floating);
		doc.addEventListener("keydown", onKeyDown);
		return () => {
			doc.removeEventListener("keydown", onKeyDown);
		};
	}, [
		disabled,
		domReference,
		floating,
		modal,
		orderRef,
		refs,
		isUntrappedTypeableCombobox,
		getTabbableContent,
		getTabbableElements
	]);
	import_react.useEffect(() => {
		if (disabled || !closeOnFocusOut) return;
		function handlePointerDown() {
			isPointerDownRef.current = true;
			setTimeout(() => {
				isPointerDownRef.current = false;
			});
		}
		function handleFocusOutside(event) {
			const relatedTarget = event.relatedTarget;
			queueMicrotask(() => {
				const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute("focus-guard")) || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
					var _node$context, _node$context2;
					return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
				}) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
					var _node$context3, _node$context4;
					return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
				})));
				if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && relatedTarget !== getPreviouslyFocusedElement()) {
					preventReturnFocusRef.current = true;
					onOpenChange(false, event);
				}
			});
		}
		if (floating && isHTMLElement(domReference)) {
			domReference.addEventListener("focusout", handleFocusOutside);
			domReference.addEventListener("pointerdown", handlePointerDown);
			!modal && floating.addEventListener("focusout", handleFocusOutside);
			return () => {
				domReference.removeEventListener("focusout", handleFocusOutside);
				domReference.removeEventListener("pointerdown", handlePointerDown);
				!modal && floating.removeEventListener("focusout", handleFocusOutside);
			};
		}
	}, [
		disabled,
		domReference,
		floating,
		modal,
		nodeId,
		tree,
		portalContext,
		onOpenChange,
		closeOnFocusOut
	]);
	import_react.useEffect(() => {
		var _portalContext$portal;
		if (disabled) return;
		const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute("portal") + "]")) || []);
		if (floating) {
			const insideElements = [
				floating,
				...portalNodes,
				startDismissButtonRef.current,
				endDismissButtonRef.current,
				orderRef.current.includes("reference") || isUntrappedTypeableCombobox ? domReference : null
			].filter((x) => x != null);
			const cleanup = originalModal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
			return () => {
				cleanup();
			};
		}
	}, [
		disabled,
		domReference,
		floating,
		originalModal,
		orderRef,
		portalContext,
		isUntrappedTypeableCombobox,
		guards
	]);
	index(() => {
		if (disabled || !floating) return;
		const previouslyFocusedElement = activeElement(getDocument(floating));
		queueMicrotask(() => {
			const focusableElements = getTabbableElements(floating);
			const initialFocusValue = initialFocusRef.current;
			const elToFocus = (typeof initialFocusValue === "number" ? focusableElements[initialFocusValue] : initialFocusValue.current) || floating;
			const focusAlreadyInsideFloatingEl = contains(floating, previouslyFocusedElement);
			if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) enqueueFocus(elToFocus, { preventScroll: elToFocus === floating });
		});
	}, [
		disabled,
		open,
		floating,
		ignoreInitialFocus,
		getTabbableElements,
		initialFocusRef
	]);
	index(() => {
		if (disabled || !floating) return;
		let preventReturnFocusScroll = false;
		const doc = getDocument(floating);
		const previouslyFocusedElement = activeElement(doc);
		const contextData = dataRef.current;
		addPreviouslyFocusedElement(previouslyFocusedElement);
		function onOpenChange(_ref) {
			let { reason, event, nested } = _ref;
			if (reason === "escape-key" && refs.domReference.current) addPreviouslyFocusedElement(refs.domReference.current);
			if (reason === "hover" && event.type === "mouseleave") preventReturnFocusRef.current = true;
			if (reason !== "outside-press") return;
			if (nested) {
				preventReturnFocusRef.current = false;
				preventReturnFocusScroll = true;
			} else preventReturnFocusRef.current = !(isVirtualClick(event) || isVirtualPointerEvent(event));
		}
		events.on("openchange", onOpenChange);
		return () => {
			events.off("openchange", onOpenChange);
			const activeEl = activeElement(doc);
			const isFocusInsideFloatingTree = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
				var _node$context5;
				return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
			});
			if ((isFocusInsideFloatingTree || contextData.openEvent && ["click", "mousedown"].includes(contextData.openEvent.type)) && refs.domReference.current) addPreviouslyFocusedElement(refs.domReference.current);
			const returnElement = getPreviouslyFocusedElement();
			if (returnFocusRef.current && !preventReturnFocusRef.current && isHTMLElement(returnElement) && (returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) enqueueFocus(returnElement, {
				cancelPrevious: false,
				preventScroll: preventReturnFocusScroll
			});
		};
	}, [
		disabled,
		floating,
		returnFocusRef,
		dataRef,
		refs,
		events,
		tree,
		nodeId
	]);
	index(() => {
		if (disabled || !portalContext) return;
		portalContext.setFocusManagerState({
			modal,
			closeOnFocusOut,
			open,
			onOpenChange,
			refs
		});
		return () => {
			portalContext.setFocusManagerState(null);
		};
	}, [
		disabled,
		portalContext,
		modal,
		open,
		onOpenChange,
		refs,
		closeOnFocusOut
	]);
	index(() => {
		if (disabled || !floating || typeof MutationObserver !== "function" || ignoreInitialFocus) return;
		const handleMutation = () => {
			const tabIndex = floating.getAttribute("tabindex");
			if (orderRef.current.includes("floating") || activeElement(getDocument(floating)) !== refs.domReference.current && getTabbableContent().length === 0) {
				if (tabIndex !== "0") floating.setAttribute("tabindex", "0");
			} else if (tabIndex !== "-1") floating.setAttribute("tabindex", "-1");
		};
		handleMutation();
		const observer = new MutationObserver(handleMutation);
		observer.observe(floating, {
			childList: true,
			subtree: true,
			attributes: true
		});
		return () => {
			observer.disconnect();
		};
	}, [
		disabled,
		floating,
		refs,
		orderRef,
		getTabbableContent,
		ignoreInitialFocus
	]);
	function renderDismissButton(location) {
		if (disabled || !visuallyHiddenDismiss || !modal) return null;
		return /*#__PURE__*/ import_react.createElement(VisuallyHiddenDismiss, {
			ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
			onClick: (event) => onOpenChange(false, event.nativeEvent)
		}, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss");
	}
	const shouldRenderGuards = !disabled && guards && (isInsidePortal || modal);
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, shouldRenderGuards && /*#__PURE__*/ import_react.createElement(FocusGuard, {
		"data-type": "inside",
		ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
		onFocus: (event) => {
			if (modal) {
				const els = getTabbableElements();
				enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
			} else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
				preventReturnFocusRef.current = false;
				if (isOutsideEvent(event, portalContext.portalNode)) (getNextTabbable() || domReference)?.focus();
				else {
					var _portalContext$before;
					(_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
				}
			}
		}
	}), !isUntrappedTypeableCombobox && renderDismissButton("start"), children, renderDismissButton("end"), shouldRenderGuards && /*#__PURE__*/ import_react.createElement(FocusGuard, {
		"data-type": "inside",
		ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
		onFocus: (event) => {
			if (modal) enqueueFocus(getTabbableElements()[0]);
			else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
				if (closeOnFocusOut) preventReturnFocusRef.current = true;
				if (isOutsideEvent(event, portalContext.portalNode)) (getPreviousTabbable() || domReference)?.focus();
				else {
					var _portalContext$afterO;
					(_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
				}
			}
		}
	}));
}
var activeLocks = /*#__PURE__*/ new Set();
/**
* Provides base styling for a fixed overlay element to dim content or block
* pointer events behind a floating element.
* It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
* @see https://floating-ui.com/docs/FloatingOverlay
*/
var FloatingOverlay = /*#__PURE__*/ import_react.forwardRef(function FloatingOverlay(_ref, ref) {
	let { lockScroll = false, ...rest } = _ref;
	const lockId = useId();
	index(() => {
		if (!lockScroll) return;
		activeLocks.add(lockId);
		const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
		const bodyStyle = document.body.style;
		const paddingProp = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight";
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
		const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
		bodyStyle.overflow = "hidden";
		if (scrollbarWidth) bodyStyle[paddingProp] = scrollbarWidth + "px";
		if (isIOS) {
			var _window$visualViewpor, _window$visualViewpor2;
			const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
			const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
			Object.assign(bodyStyle, {
				position: "fixed",
				top: -(scrollY - Math.floor(offsetTop)) + "px",
				left: -(scrollX - Math.floor(offsetLeft)) + "px",
				right: "0"
			});
		}
		return () => {
			activeLocks.delete(lockId);
			if (activeLocks.size === 0) {
				Object.assign(bodyStyle, {
					overflow: "",
					[paddingProp]: ""
				});
				if (isIOS) {
					Object.assign(bodyStyle, {
						position: "",
						top: "",
						left: "",
						right: ""
					});
					window.scrollTo(scrollX, scrollY);
				}
			}
		};
	}, [lockId, lockScroll]);
	return /*#__PURE__*/ import_react.createElement("div", _extends({ ref }, rest, { style: {
		position: "fixed",
		overflow: "auto",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...rest.style
	} }));
});
function isButtonTarget(event) {
	return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
}
function isSpaceIgnored(element) {
	return isTypeableElement(element);
}
/**
* Opens or closes the floating element when clicking the reference element.
* @see https://floating-ui.com/docs/useClick
*/
function useClick(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, dataRef, elements: { domReference } } = context;
	const { enabled = true, event: eventOption = "click", toggle = true, ignoreMouse = false, keyboardHandlers = true } = props;
	const pointerTypeRef = import_react.useRef();
	const didKeyDownRef = import_react.useRef(false);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		return { reference: {
			onPointerDown(event) {
				pointerTypeRef.current = event.pointerType;
			},
			onMouseDown(event) {
				if (event.button !== 0) return;
				if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) return;
				if (eventOption === "click") return;
				if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) onOpenChange(false, event.nativeEvent, "click");
				else {
					event.preventDefault();
					onOpenChange(true, event.nativeEvent, "click");
				}
			},
			onClick(event) {
				if (eventOption === "mousedown" && pointerTypeRef.current) {
					pointerTypeRef.current = void 0;
					return;
				}
				if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) return;
				if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) onOpenChange(false, event.nativeEvent, "click");
				else onOpenChange(true, event.nativeEvent, "click");
			},
			onKeyDown(event) {
				pointerTypeRef.current = void 0;
				if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) return;
				if (event.key === " " && !isSpaceIgnored(domReference)) {
					event.preventDefault();
					didKeyDownRef.current = true;
				}
				if (event.key === "Enter") {
					if (open && toggle) onOpenChange(false, event.nativeEvent, "click");
					else onOpenChange(true, event.nativeEvent, "click");
				}
			},
			onKeyUp(event) {
				if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) return;
				if (event.key === " " && didKeyDownRef.current) {
					didKeyDownRef.current = false;
					if (open && toggle) onOpenChange(false, event.nativeEvent, "click");
					else onOpenChange(true, event.nativeEvent, "click");
				}
			}
		} };
	}, [
		enabled,
		dataRef,
		eventOption,
		ignoreMouse,
		keyboardHandlers,
		domReference,
		toggle,
		open,
		onOpenChange
	]);
}
var bubbleHandlerKeys = {
	pointerdown: "onPointerDown",
	mousedown: "onMouseDown",
	click: "onClick"
};
var captureHandlerKeys = {
	pointerdown: "onPointerDownCapture",
	mousedown: "onMouseDownCapture",
	click: "onClickCapture"
};
var normalizeProp = (normalizable) => {
	var _normalizable$escapeK, _normalizable$outside;
	return {
		escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
		outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
	};
};
/**
* Closes the floating element when a dismissal is requested — by default, when
* the user presses the `escape` key or outside of the floating element.
* @see https://floating-ui.com/docs/useDismiss
*/
function useDismiss(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, nodeId, elements: { reference, domReference, floating }, dataRef } = context;
	const { enabled = true, escapeKey = true, outsidePress: unstable_outsidePress = true, outsidePressEvent = "pointerdown", referencePress = false, referencePressEvent = "pointerdown", ancestorScroll = false, bubbles, capture } = props;
	const tree = useFloatingTree();
	const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
	const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
	const insideReactTreeRef = import_react.useRef(false);
	const endedOrStartedInsideRef = import_react.useRef(false);
	const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
	const { escapeKey: escapeKeyCapture, outsidePress: outsidePressCapture } = normalizeProp(capture);
	const closeOnEscapeKeyDown = useEffectEvent((event) => {
		if (!open || !enabled || !escapeKey || event.key !== "Escape") return;
		const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
		if (!escapeKeyBubbles) {
			event.stopPropagation();
			if (children.length > 0) {
				let shouldDismiss = true;
				children.forEach((child) => {
					var _child$context;
					if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
						shouldDismiss = false;
						return;
					}
				});
				if (!shouldDismiss) return;
			}
		}
		onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
	});
	const closeOnEscapeKeyDownCapture = useEffectEvent((event) => {
		var _getTarget2;
		const callback = () => {
			var _getTarget;
			closeOnEscapeKeyDown(event);
			(_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
		};
		(_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
	});
	const closeOnPressOutside = useEffectEvent((event) => {
		const insideReactTree = insideReactTreeRef.current;
		insideReactTreeRef.current = false;
		const endedOrStartedInside = endedOrStartedInsideRef.current;
		endedOrStartedInsideRef.current = false;
		if (outsidePressEvent === "click" && endedOrStartedInside) return;
		if (insideReactTree) return;
		if (typeof outsidePress === "function" && !outsidePress(event)) return;
		const target = getTarget(event);
		const inertSelector = "[" + createAttribute("inert") + "]";
		const markers = getDocument(floating).querySelectorAll(inertSelector);
		let targetRootAncestor = isElement(target) ? target : null;
		while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
			const nextParent = getParentNode(targetRootAncestor);
			if (isLastTraversableNode(nextParent) || !isElement(nextParent)) break;
			else targetRootAncestor = nextParent;
		}
		if (markers.length && isElement(target) && !isRootElement(target) && !contains(target, floating) && Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) return;
		if (isHTMLElement(target) && floating) {
			const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
			const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
			let xCond = canScrollY && event.offsetX > target.clientWidth;
			if (canScrollY) {
				if (getComputedStyle$1(target).direction === "rtl") xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
			}
			if (xCond || canScrollX && event.offsetY > target.clientHeight) return;
		}
		const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
			var _node$context;
			return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
		});
		if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) return;
		const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
		if (children.length > 0) {
			let shouldDismiss = true;
			children.forEach((child) => {
				var _child$context2;
				if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
					shouldDismiss = false;
					return;
				}
			});
			if (!shouldDismiss) return;
		}
		onOpenChange(false, event, "outside-press");
	});
	const closeOnPressOutsideCapture = useEffectEvent((event) => {
		var _getTarget4;
		const callback = () => {
			var _getTarget3;
			closeOnPressOutside(event);
			(_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
		};
		(_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
	});
	import_react.useEffect(() => {
		if (!open || !enabled) return;
		dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
		dataRef.current.__outsidePressBubbles = outsidePressBubbles;
		function onScroll(event) {
			onOpenChange(false, event, "ancestor-scroll");
		}
		const doc = getDocument(floating);
		escapeKey && doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
		outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
		let ancestors = [];
		if (ancestorScroll) {
			if (isElement(domReference)) ancestors = getOverflowAncestors(domReference);
			if (isElement(floating)) ancestors = ancestors.concat(getOverflowAncestors(floating));
			if (!isElement(reference) && reference && reference.contextElement) ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
		}
		ancestors = ancestors.filter((ancestor) => {
			var _doc$defaultView;
			return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
		});
		ancestors.forEach((ancestor) => {
			ancestor.addEventListener("scroll", onScroll, { passive: true });
		});
		return () => {
			escapeKey && doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
			outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
			ancestors.forEach((ancestor) => {
				ancestor.removeEventListener("scroll", onScroll);
			});
		};
	}, [
		dataRef,
		floating,
		domReference,
		reference,
		escapeKey,
		outsidePress,
		outsidePressEvent,
		open,
		onOpenChange,
		ancestorScroll,
		enabled,
		escapeKeyBubbles,
		outsidePressBubbles,
		closeOnEscapeKeyDown,
		escapeKeyCapture,
		closeOnEscapeKeyDownCapture,
		closeOnPressOutside,
		outsidePressCapture,
		closeOnPressOutsideCapture
	]);
	import_react.useEffect(() => {
		insideReactTreeRef.current = false;
	}, [outsidePress, outsidePressEvent]);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		return {
			reference: {
				onKeyDown: closeOnEscapeKeyDown,
				[bubbleHandlerKeys[referencePressEvent]]: (event) => {
					if (referencePress) onOpenChange(false, event.nativeEvent, "reference-press");
				}
			},
			floating: {
				onKeyDown: closeOnEscapeKeyDown,
				onMouseDown() {
					endedOrStartedInsideRef.current = true;
				},
				onMouseUp() {
					endedOrStartedInsideRef.current = true;
				},
				[captureHandlerKeys[outsidePressEvent]]: () => {
					insideReactTreeRef.current = true;
				}
			}
		};
	}, [
		enabled,
		referencePress,
		outsidePressEvent,
		referencePressEvent,
		onOpenChange,
		closeOnEscapeKeyDown
	]);
}
/**
* Provides data to position a floating element and context to add interactions.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options) {
	var _options$elements2;
	if (options === void 0) options = {};
	const { open = false, onOpenChange: unstable_onOpenChange, nodeId } = options;
	const [_domReference, setDomReference] = import_react.useState(null);
	const domReference = ((_options$elements2 = options.elements) == null ? void 0 : _options$elements2.reference) || _domReference;
	const position = useFloating$1(options);
	const tree = useFloatingTree();
	const nested = useFloatingParentNodeId() != null;
	const onOpenChange = useEffectEvent((open, event, reason) => {
		if (open) dataRef.current.openEvent = event;
		events.emit("openchange", {
			open,
			event,
			reason,
			nested
		});
		unstable_onOpenChange?.(open, event, reason);
	});
	const domReferenceRef = import_react.useRef(null);
	const dataRef = import_react.useRef({});
	const events = import_react.useState(() => createPubSub())[0];
	const floatingId = useId();
	const setPositionReference = import_react.useCallback((node) => {
		const positionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			contextElement: node
		} : node;
		position.refs.setReference(positionReference);
	}, [position.refs]);
	const setReference = import_react.useCallback((node) => {
		if (isElement(node) || node === null) {
			domReferenceRef.current = node;
			setDomReference(node);
		}
		if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
	}, [position.refs]);
	const refs = import_react.useMemo(() => ({
		...position.refs,
		setReference,
		setPositionReference,
		domReference: domReferenceRef
	}), [
		position.refs,
		setReference,
		setPositionReference
	]);
	const elements = import_react.useMemo(() => ({
		...position.elements,
		domReference
	}), [position.elements, domReference]);
	const context = import_react.useMemo(() => ({
		...position,
		refs,
		elements,
		dataRef,
		nodeId,
		floatingId,
		events,
		open,
		onOpenChange
	}), [
		position,
		nodeId,
		floatingId,
		events,
		open,
		onOpenChange,
		refs,
		elements
	]);
	index(() => {
		const node = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === nodeId);
		if (node) node.context = context;
	});
	return import_react.useMemo(() => ({
		...position,
		context,
		refs,
		elements
	}), [
		position,
		refs,
		elements,
		context
	]);
}
/**
* Opens the floating element while the reference element has focus, like CSS
* `:focus`.
* @see https://floating-ui.com/docs/useFocus
*/
function useFocus(context, props) {
	if (props === void 0) props = {};
	const { open, onOpenChange, events, refs, elements: { floating, domReference } } = context;
	const { enabled = true, visibleOnly = true } = props;
	const blockFocusRef = import_react.useRef(false);
	const timeoutRef = import_react.useRef();
	const keyboardModalityRef = import_react.useRef(true);
	import_react.useEffect(() => {
		if (!enabled) return;
		const win = getWindow(domReference);
		function onBlur() {
			if (!open && isHTMLElement(domReference) && domReference === activeElement(getDocument(domReference))) blockFocusRef.current = true;
		}
		function onKeyDown() {
			keyboardModalityRef.current = true;
		}
		win.addEventListener("blur", onBlur);
		win.addEventListener("keydown", onKeyDown, true);
		return () => {
			win.removeEventListener("blur", onBlur);
			win.removeEventListener("keydown", onKeyDown, true);
		};
	}, [
		floating,
		domReference,
		open,
		enabled
	]);
	import_react.useEffect(() => {
		if (!enabled) return;
		function onOpenChange(_ref) {
			let { reason } = _ref;
			if (reason === "reference-press" || reason === "escape-key") blockFocusRef.current = true;
		}
		events.on("openchange", onOpenChange);
		return () => {
			events.off("openchange", onOpenChange);
		};
	}, [events, enabled]);
	import_react.useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		return { reference: {
			onPointerDown(event) {
				if (isVirtualPointerEvent(event.nativeEvent)) return;
				keyboardModalityRef.current = false;
			},
			onMouseLeave() {
				blockFocusRef.current = false;
			},
			onFocus(event) {
				if (blockFocusRef.current) return;
				const target = getTarget(event.nativeEvent);
				if (visibleOnly && isElement(target)) try {
					if (isSafari() && isMac()) throw Error();
					if (!target.matches(":focus-visible")) return;
				} catch (e) {
					if (!keyboardModalityRef.current && !isTypeableElement(target)) return;
				}
				onOpenChange(true, event.nativeEvent, "focus");
			},
			onBlur(event) {
				blockFocusRef.current = false;
				const relatedTarget = event.relatedTarget;
				const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
				timeoutRef.current = window.setTimeout(() => {
					const activeEl = activeElement(domReference ? domReference.ownerDocument : document);
					if (!relatedTarget && activeEl === domReference) return;
					if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) return;
					onOpenChange(false, event.nativeEvent, "focus");
				});
			}
		} };
	}, [
		enabled,
		visibleOnly,
		domReference,
		refs,
		onOpenChange
	]);
}
function mergeProps(userProps, propsList, elementKey) {
	const map = /* @__PURE__ */ new Map();
	return {
		...elementKey === "floating" && { tabIndex: -1 },
		...userProps,
		...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
			if (!props) return acc;
			Object.entries(props).forEach((_ref) => {
				let [key, value] = _ref;
				if (key.indexOf("on") === 0) {
					if (!map.has(key)) map.set(key, []);
					if (typeof value === "function") {
						var _map$get;
						(_map$get = map.get(key)) == null || _map$get.push(value);
						acc[key] = function() {
							var _map$get2;
							for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
							return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
						};
					}
				} else acc[key] = value;
			});
			return acc;
		}, {})
	};
}
/**
* Merges an array of interaction hooks' props into prop getters, allowing
* event handler functions to be composed together without overwriting one
* another.
* @see https://floating-ui.com/docs/useInteractions
*/
function useInteractions(propsList) {
	if (propsList === void 0) propsList = [];
	const deps = propsList;
	const getReferenceProps = import_react.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), deps);
	const getFloatingProps = import_react.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), deps);
	const getItemProps = import_react.useCallback((userProps) => mergeProps(userProps, propsList, "item"), propsList.map((key) => key == null ? void 0 : key.item));
	return import_react.useMemo(() => ({
		getReferenceProps,
		getFloatingProps,
		getItemProps
	}), [
		getReferenceProps,
		getFloatingProps,
		getItemProps
	]);
}
var isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
	switch (orientation) {
		case "vertical": return vertical;
		case "horizontal": return horizontal;
		default: return vertical || horizontal;
	}
}
function isMainOrientationKey(key, orientation) {
	return doSwitch(orientation, key === ARROW_UP || key === ARROW_DOWN, key === ARROW_LEFT || key === ARROW_RIGHT);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
	return doSwitch(orientation, key === ARROW_DOWN, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT) || key === "Enter" || key == " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
	return doSwitch(orientation, rtl ? key === ARROW_LEFT : key === ARROW_RIGHT, key === ARROW_DOWN);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
	return doSwitch(orientation, rtl ? key === ARROW_RIGHT : key === ARROW_LEFT, key === ARROW_UP);
}
/**
* Adds arrow key-based navigation of a list of items, either using real DOM
* focus or virtual focus.
* @see https://floating-ui.com/docs/useListNavigation
*/
function useListNavigation(context, props) {
	const { open, onOpenChange, refs, elements: { domReference, floating } } = context;
	const { listRef, activeIndex, onNavigate: unstable_onNavigate = () => {}, enabled = true, selectedIndex = null, allowEscape = false, loop = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = "auto", focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = void 0, orientation = "vertical", cols = 1, scrollItemIntoView = true, virtualItemRef } = props;
	const parentId = useFloatingParentNodeId();
	const tree = useFloatingTree();
	const onNavigate = useEffectEvent(unstable_onNavigate);
	const focusItemOnOpenRef = import_react.useRef(focusItemOnOpen);
	const indexRef = import_react.useRef(selectedIndex != null ? selectedIndex : -1);
	const keyRef = import_react.useRef(null);
	const isPointerModalityRef = import_react.useRef(true);
	const previousOnNavigateRef = import_react.useRef(onNavigate);
	const previousMountedRef = import_react.useRef(!!floating);
	const forceSyncFocus = import_react.useRef(false);
	const forceScrollIntoViewRef = import_react.useRef(false);
	const disabledIndicesRef = useLatestRef(disabledIndices);
	const latestOpenRef = useLatestRef(open);
	const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
	const [activeId, setActiveId] = import_react.useState();
	const [virtualId, setVirtualId] = import_react.useState();
	const focusItem = useEffectEvent(function(listRef, indexRef, forceScrollIntoView) {
		if (forceScrollIntoView === void 0) forceScrollIntoView = false;
		const item = listRef.current[indexRef.current];
		if (!item) return;
		if (virtual) {
			setActiveId(item.id);
			tree?.events.emit("virtualfocus", item);
			if (virtualItemRef) virtualItemRef.current = item;
		} else enqueueFocus(item, {
			preventScroll: true,
			sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
		});
		requestAnimationFrame(() => {
			const scrollIntoViewOptions = scrollItemIntoViewRef.current;
			if (scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current)) item.scrollIntoView == null || item.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
				block: "nearest",
				inline: "nearest"
			} : scrollIntoViewOptions);
		});
	});
	index(() => {
		document.createElement("div").focus({ get preventScroll() {
			isPreventScrollSupported = true;
			return false;
		} });
	}, []);
	index(() => {
		if (!enabled) return;
		if (open && floating) {
			if (focusItemOnOpenRef.current && selectedIndex != null) {
				forceScrollIntoViewRef.current = true;
				onNavigate(selectedIndex);
			}
		} else if (previousMountedRef.current) {
			indexRef.current = -1;
			previousOnNavigateRef.current(null);
		}
	}, [
		enabled,
		open,
		floating,
		selectedIndex,
		onNavigate
	]);
	index(() => {
		if (!enabled) return;
		if (open && floating) {
			if (activeIndex == null) {
				forceSyncFocus.current = false;
				if (selectedIndex != null) return;
				if (previousMountedRef.current) {
					indexRef.current = -1;
					focusItem(listRef, indexRef);
				}
				if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
					let runs = 0;
					const waitForListPopulated = () => {
						if (listRef.current[0] == null) {
							if (runs < 2) (runs ? requestAnimationFrame : queueMicrotask)(waitForListPopulated);
							runs++;
						} else {
							indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
							keyRef.current = null;
							onNavigate(indexRef.current);
						}
					};
					waitForListPopulated();
				}
			} else if (!isIndexOutOfBounds(listRef, activeIndex)) {
				indexRef.current = activeIndex;
				focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
				forceScrollIntoViewRef.current = false;
			}
		}
	}, [
		enabled,
		open,
		floating,
		activeIndex,
		selectedIndex,
		nested,
		listRef,
		orientation,
		rtl,
		onNavigate,
		focusItem,
		disabledIndicesRef
	]);
	index(() => {
		var _nodes$find;
		if (!enabled || floating || !tree || virtual || !previousMountedRef.current) return;
		const nodes = tree.nodesRef.current;
		const parent = (_nodes$find = nodes.find((node) => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
		const activeEl = activeElement(getDocument(floating));
		const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
		if (parent && !treeContainsActiveEl && isPointerModalityRef.current) parent.focus({ preventScroll: true });
	}, [
		enabled,
		floating,
		tree,
		parentId,
		virtual
	]);
	index(() => {
		if (!enabled || !tree || !virtual || parentId) return;
		function handleVirtualFocus(item) {
			setVirtualId(item.id);
			if (virtualItemRef) virtualItemRef.current = item;
		}
		tree.events.on("virtualfocus", handleVirtualFocus);
		return () => {
			tree.events.off("virtualfocus", handleVirtualFocus);
		};
	}, [
		enabled,
		tree,
		virtual,
		parentId,
		virtualItemRef
	]);
	index(() => {
		previousOnNavigateRef.current = onNavigate;
		previousMountedRef.current = !!floating;
	});
	index(() => {
		if (!open) keyRef.current = null;
	}, [open]);
	const hasActiveIndex = activeIndex != null;
	const item = import_react.useMemo(() => {
		function syncCurrentTarget(currentTarget) {
			if (!open) return;
			const index = listRef.current.indexOf(currentTarget);
			if (index !== -1) onNavigate(index);
		}
		return {
			onFocus(_ref) {
				let { currentTarget } = _ref;
				syncCurrentTarget(currentTarget);
			},
			onClick: (_ref2) => {
				let { currentTarget } = _ref2;
				return currentTarget.focus({ preventScroll: true });
			},
			...focusItemOnHover && {
				onMouseMove(_ref3) {
					let { currentTarget } = _ref3;
					syncCurrentTarget(currentTarget);
				},
				onPointerLeave(_ref4) {
					let { pointerType } = _ref4;
					if (!isPointerModalityRef.current || pointerType === "touch") return;
					indexRef.current = -1;
					focusItem(listRef, indexRef);
					onNavigate(null);
					if (!virtual) enqueueFocus(refs.floating.current, { preventScroll: true });
				}
			}
		};
	}, [
		open,
		refs,
		focusItem,
		focusItemOnHover,
		listRef,
		onNavigate,
		virtual
	]);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		const disabledIndices = disabledIndicesRef.current;
		function onKeyDown(event) {
			isPointerModalityRef.current = false;
			forceSyncFocus.current = true;
			if (!latestOpenRef.current && event.currentTarget === refs.floating.current) return;
			if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
				stopEvent(event);
				onOpenChange(false, event.nativeEvent, "list-navigation");
				if (isHTMLElement(domReference) && !virtual) domReference.focus();
				return;
			}
			const currentIndex = indexRef.current;
			const minIndex = getMinIndex(listRef, disabledIndices);
			const maxIndex = getMaxIndex(listRef, disabledIndices);
			if (event.key === "Home") {
				stopEvent(event);
				indexRef.current = minIndex;
				onNavigate(indexRef.current);
			}
			if (event.key === "End") {
				stopEvent(event);
				indexRef.current = maxIndex;
				onNavigate(indexRef.current);
			}
			if (cols > 1) {
				indexRef.current = getGridNavigatedIndex(listRef, {
					event,
					orientation,
					loop,
					cols,
					disabledIndices,
					minIndex,
					maxIndex,
					prevIndex: indexRef.current,
					stopEvent: true
				});
				onNavigate(indexRef.current);
				if (orientation === "both") return;
			}
			if (isMainOrientationKey(event.key, orientation)) {
				stopEvent(event);
				if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
					indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
					onNavigate(indexRef.current);
					return;
				}
				if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
					if (loop) indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
						startingIndex: currentIndex,
						disabledIndices
					});
					else indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
						startingIndex: currentIndex,
						disabledIndices
					}));
				} else if (loop) indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
					startingIndex: currentIndex,
					decrement: true,
					disabledIndices
				});
				else indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
					startingIndex: currentIndex,
					decrement: true,
					disabledIndices
				}));
				if (isIndexOutOfBounds(listRef, indexRef.current)) onNavigate(null);
				else onNavigate(indexRef.current);
			}
		}
		function checkVirtualMouse(event) {
			if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) focusItemOnOpenRef.current = true;
		}
		function checkVirtualPointer(event) {
			focusItemOnOpenRef.current = focusItemOnOpen;
			if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) focusItemOnOpenRef.current = true;
		}
		const ariaActiveDescendantProp = virtual && open && hasActiveIndex && { "aria-activedescendant": virtualId || activeId };
		const activeItem = listRef.current.find((item) => (item == null ? void 0 : item.id) === activeId);
		return {
			reference: {
				...ariaActiveDescendantProp,
				onKeyDown(event) {
					isPointerModalityRef.current = false;
					const isArrowKey = event.key.indexOf("Arrow") === 0;
					const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
					const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
					const isMainKey = isMainOrientationKey(event.key, orientation);
					const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
					if (virtual && open) {
						const rootNode = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.parentId == null);
						const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
						if (isArrowKey && deepestNode && virtualItemRef) {
							const eventObject = new KeyboardEvent("keydown", {
								key: event.key,
								bubbles: true
							});
							if (isCrossOpenKey || isCrossCloseKey) {
								var _deepestNode$context, _deepestNode$context2;
								const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
								const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? activeItem : null;
								if (dispatchItem) {
									stopEvent(event);
									dispatchItem.dispatchEvent(eventObject);
									setVirtualId(void 0);
								}
							}
							if (isMainKey && deepestNode.context) {
								if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
									var _deepestNode$context$;
									stopEvent(event);
									(_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
									return;
								}
							}
						}
						return onKeyDown(event);
					}
					if (!open && !openOnArrowKeyDown && isArrowKey) return;
					if (isNavigationKey) keyRef.current = nested && isMainKey ? null : event.key;
					if (nested) {
						if (isCrossOpenKey) {
							stopEvent(event);
							if (open) {
								indexRef.current = getMinIndex(listRef, disabledIndices);
								onNavigate(indexRef.current);
							} else onOpenChange(true, event.nativeEvent, "list-navigation");
						}
						return;
					}
					if (isMainKey) {
						if (selectedIndex != null) indexRef.current = selectedIndex;
						stopEvent(event);
						if (!open && openOnArrowKeyDown) onOpenChange(true, event.nativeEvent, "list-navigation");
						else onKeyDown(event);
						if (open) onNavigate(indexRef.current);
					}
				},
				onFocus() {
					if (open) onNavigate(null);
				},
				onPointerDown: checkVirtualPointer,
				onMouseDown: checkVirtualMouse,
				onClick: checkVirtualMouse
			},
			floating: {
				"aria-orientation": orientation === "both" ? void 0 : orientation,
				...ariaActiveDescendantProp,
				onKeyDown,
				onPointerMove() {
					isPointerModalityRef.current = true;
				}
			},
			item
		};
	}, [
		domReference,
		refs,
		activeId,
		virtualId,
		disabledIndicesRef,
		latestOpenRef,
		listRef,
		enabled,
		orientation,
		rtl,
		virtual,
		open,
		hasActiveIndex,
		nested,
		selectedIndex,
		openOnArrowKeyDown,
		allowEscape,
		cols,
		loop,
		focusItemOnOpen,
		onNavigate,
		onOpenChange,
		item,
		tree,
		virtualItemRef
	]);
}
/**
* Adds base screen reader props to the reference and floating elements for a
* given floating element `role`.
* @see https://floating-ui.com/docs/useRole
*/
function useRole(context, props) {
	if (props === void 0) props = {};
	const { open, floatingId } = context;
	const { enabled = true, role = "dialog" } = props;
	const referenceId = useId();
	return import_react.useMemo(() => {
		if (!enabled) return {};
		const floatingProps = {
			id: floatingId,
			...role !== "label" && { role }
		};
		if (role === "tooltip" || role === "label") return {
			reference: { ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0 },
			floating: floatingProps
		};
		return {
			reference: {
				"aria-expanded": open ? "true" : "false",
				"aria-haspopup": role === "alertdialog" ? "dialog" : role,
				"aria-controls": open ? floatingId : void 0,
				...role === "listbox" && { role: "combobox" },
				...role === "menu" && { id: referenceId }
			},
			floating: {
				...floatingProps,
				...role === "menu" && { "aria-labelledby": referenceId }
			}
		};
	}, [
		enabled,
		role,
		open,
		floatingId,
		referenceId
	]);
}
/**
* Provides a matching callback that can be used to focus an item as the user
* types, often used in tandem with `useListNavigation()`.
* @see https://floating-ui.com/docs/useTypeahead
*/
function useTypeahead(context, props) {
	var _ref;
	const { open, dataRef } = context;
	const { listRef, activeIndex, onMatch: unstable_onMatch, onTypingChange: unstable_onTypingChange, enabled = true, findMatch = null, resetMs = 750, ignoreKeys = [], selectedIndex = null } = props;
	const timeoutIdRef = import_react.useRef();
	const stringRef = import_react.useRef("");
	const prevIndexRef = import_react.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
	const matchIndexRef = import_react.useRef(null);
	const onMatch = useEffectEvent(unstable_onMatch);
	const onTypingChange = useEffectEvent(unstable_onTypingChange);
	const findMatchRef = useLatestRef(findMatch);
	const ignoreKeysRef = useLatestRef(ignoreKeys);
	index(() => {
		if (open) {
			clearTimeout(timeoutIdRef.current);
			matchIndexRef.current = null;
			stringRef.current = "";
		}
	}, [open]);
	index(() => {
		if (open && stringRef.current === "") {
			var _ref2;
			prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
		}
	}, [
		open,
		selectedIndex,
		activeIndex
	]);
	return import_react.useMemo(() => {
		if (!enabled) return {};
		function setTypingChange(value) {
			if (value) {
				if (!dataRef.current.typing) {
					dataRef.current.typing = value;
					onTypingChange(value);
				}
			} else if (dataRef.current.typing) {
				dataRef.current.typing = value;
				onTypingChange(value);
			}
		}
		function getMatchingIndex(list, orderedList, string) {
			const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
			return str ? list.indexOf(str) : -1;
		}
		function onKeyDown(event) {
			const listContent = listRef.current;
			if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
				if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) setTypingChange(false);
				else if (event.key === " ") stopEvent(event);
			}
			if (listContent == null || ignoreKeysRef.current.includes(event.key) || event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) return;
			if (open && event.key !== " ") {
				stopEvent(event);
				setTypingChange(true);
			}
			if (listContent.every((text) => {
				var _text$, _text$2;
				return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
			}) && stringRef.current === event.key) {
				stringRef.current = "";
				prevIndexRef.current = matchIndexRef.current;
			}
			stringRef.current += event.key;
			clearTimeout(timeoutIdRef.current);
			timeoutIdRef.current = setTimeout(() => {
				stringRef.current = "";
				prevIndexRef.current = matchIndexRef.current;
				setTypingChange(false);
			}, resetMs);
			const prevIndex = prevIndexRef.current;
			const index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
			if (index !== -1) {
				onMatch(index);
				matchIndexRef.current = index;
			} else if (event.key !== " ") {
				stringRef.current = "";
				setTypingChange(false);
			}
		}
		return {
			reference: { onKeyDown },
			floating: {
				onKeyDown,
				onKeyUp(event) {
					if (event.key === " ") setTypingChange(false);
				}
			}
		};
	}, [
		enabled,
		open,
		dataRef,
		listRef,
		resetMs,
		ignoreKeysRef,
		findMatchRef,
		onMatch,
		onTypingChange
	]);
}
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let isInside = false;
	const length = polygon.length;
	for (let i = 0, j = length - 1; i < length; j = i++) {
		const [xi, yi] = polygon[i] || [0, 0];
		const [xj, yj] = polygon[j] || [0, 0];
		if (yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi) isInside = !isInside;
	}
	return isInside;
}
function isInside(point, rect) {
	return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
* Generates a safe polygon area that the user can traverse without closing the
* floating element once leaving the reference element.
* @see https://floating-ui.com/docs/useHover#safePolygon
*/
function safePolygon(options) {
	if (options === void 0) options = {};
	const { buffer = .5, blockPointerEvents = false, requireIntent = true } = options;
	let timeoutId;
	let hasLanded = false;
	let lastX = null;
	let lastY = null;
	let lastCursorTime = performance.now();
	function getCursorSpeed(x, y) {
		const currentTime = performance.now();
		const elapsedTime = currentTime - lastCursorTime;
		if (lastX === null || lastY === null || elapsedTime === 0) {
			lastX = x;
			lastY = y;
			lastCursorTime = currentTime;
			return null;
		}
		const deltaX = x - lastX;
		const deltaY = y - lastY;
		const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / elapsedTime;
		lastX = x;
		lastY = y;
		lastCursorTime = currentTime;
		return speed;
	}
	const fn = (_ref) => {
		let { x, y, placement, elements, onClose, nodeId, tree } = _ref;
		return function onMouseMove(event) {
			function close() {
				clearTimeout(timeoutId);
				onClose();
			}
			clearTimeout(timeoutId);
			if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) return;
			const { clientX, clientY } = event;
			const clientPoint = [clientX, clientY];
			const target = getTarget(event);
			const isLeave = event.type === "mouseleave";
			const isOverFloatingEl = contains(elements.floating, target);
			const isOverReferenceEl = contains(elements.domReference, target);
			const refRect = elements.domReference.getBoundingClientRect();
			const rect = elements.floating.getBoundingClientRect();
			const side = placement.split("-")[0];
			const cursorLeaveFromRight = x > rect.right - rect.width / 2;
			const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
			const isOverReferenceRect = isInside(clientPoint, refRect);
			const isFloatingWider = rect.width > refRect.width;
			const isFloatingTaller = rect.height > refRect.height;
			const left = (isFloatingWider ? refRect : rect).left;
			const right = (isFloatingWider ? refRect : rect).right;
			const top = (isFloatingTaller ? refRect : rect).top;
			const bottom = (isFloatingTaller ? refRect : rect).bottom;
			if (isOverFloatingEl) {
				hasLanded = true;
				if (!isLeave) return;
			}
			if (isOverReferenceEl) hasLanded = false;
			if (isOverReferenceEl && !isLeave) {
				hasLanded = true;
				return;
			}
			if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) return;
			if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
				let { context } = _ref2;
				return context == null ? void 0 : context.open;
			})) return;
			if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) return close();
			let rectPoly = [];
			switch (side) {
				case "top":
					rectPoly = [
						[left, refRect.top + 1],
						[left, rect.bottom - 1],
						[right, rect.bottom - 1],
						[right, refRect.top + 1]
					];
					break;
				case "bottom":
					rectPoly = [
						[left, rect.top + 1],
						[left, refRect.bottom - 1],
						[right, refRect.bottom - 1],
						[right, rect.top + 1]
					];
					break;
				case "left":
					rectPoly = [
						[rect.right - 1, bottom],
						[rect.right - 1, top],
						[refRect.left + 1, top],
						[refRect.left + 1, bottom]
					];
					break;
				case "right": rectPoly = [
					[refRect.right - 1, bottom],
					[refRect.right - 1, top],
					[rect.left + 1, top],
					[rect.left + 1, bottom]
				];
			}
			function getPolygon(_ref3) {
				let [x, y] = _ref3;
				switch (side) {
					case "top": return [
						[isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1],
						[isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1],
						...[[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]]
					];
					case "bottom": return [
						[isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer],
						[isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer],
						...[[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]]
					];
					case "left": {
						const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
						const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
						return [
							...[[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]],
							cursorPointOne,
							cursorPointTwo
						];
					}
					case "right": return [
						[x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4],
						[x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4],
						...[[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]]
					];
				}
			}
			if (isPointInPolygon([clientX, clientY], rectPoly)) return;
			else if (hasLanded && !isOverReferenceRect) return close();
			if (!isLeave && requireIntent) {
				const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
				if (cursorSpeed !== null && cursorSpeed < .1) return close();
			}
			if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) close();
			else if (!hasLanded && requireIntent) timeoutId = window.setTimeout(close, 40);
		};
	};
	fn.__options = { blockPointerEvents };
	return fn;
}
//#endregion
export { flip as C, require_react_dom as D, size as E, require_react as O, arrow as S, shift as T, useListItem as _, FloatingPortal as a, useRole as b, useClick as c, useFloatingNodeId as d, useFloatingParentNodeId as f, useInteractions as g, useHover as h, FloatingOverlay as i, useDismiss as l, useFocus as m, FloatingList as n, FloatingTree as o, useFloatingTree as p, FloatingNode as r, safePolygon as s, FloatingFocusManager as t, useFloating as u, useListNavigation as v, offset as w, useTypeahead as x, useMergeRefs as y };
