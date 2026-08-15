import { o as __toESM } from "../_runtime.mjs";
import { O as require_react } from "../_libs/@floating-ui/react+[...].mjs";
import { a as Chip, c as Button, f as Input, m as require_jsx_runtime, o as Card, p as Typography, t as Alert } from "../_libs/@material-tailwind/react+[...].mjs";
import { t as axios } from "../_libs/axios+[...].mjs";
import { a as CircleX, i as MapPin, n as ShieldCheck, o as CircleCheck, r as Search, s as Award, t as User } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validate-B3afK5M2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ValidateDocument() {
	const [code, setCode] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const handleValidate = async (e) => {
		e.preventDefault();
		const cleanCode = code.trim();
		if (!cleanCode) return;
		setLoading(true);
		setError(null);
		setResult(null);
		try {
			const response = await axios.get(`https://certgenerator.com.br/api/validate/${encodeURIComponent(cleanCode)}`);
			setResult(response.data);
		} catch (err) {
			console.error("Erro na validação:", err);
			if (err.response && err.response.status === 404 || err.response.status === 400) {
				const detail = err.response.data?.detail;
				const message = typeof detail === "string" ? detail : detail?.message;
				setError(message || "Código de verificação inválido ou certificado revogado.");
			} else setError("Erro ao conectar com o serviço de validação. Tente novamente mais tarde.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-10 w-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
							type: "h2",
							className: "font-bold text-gray-900",
							children: "Validação de Documento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
							className: "mx-auto mt-2 max-w-xl font-normal text-gray-600",
							children: "Insira o código de verificação impresso no certificado para verificar sua autenticidade."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "mb-6 p-6 shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleValidate,
						className: "flex flex-col gap-4 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "text",
								size: "lg",
								label: "Código de Verificação",
								placeholder: "IESI-A1B2C3D4 ou UUID",
								value: code,
								onChange: (event) => setCode(event.target.value),
								disabled: loading
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							variant: "solid",
							color: "primary",
							disabled: loading || !code.trim(),
							className: "flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), loading ? "Validando..." : "Validar"]
						})]
					})
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
					color: "error",
					className: "mb-6 border border-red-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert.Icon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert.Content, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
						type: "h6",
						color: "error",
						className: "font-semibold",
						children: "Documento Não Autenticado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
						type: "small",
						className: "mt-1 font-normal text-gray-700",
						children: error
					})] })]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden border border-green-200 shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 bg-green-600 p-5 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
								type: "h6",
								className: "font-bold text-white",
								children: "Documento Autêntico e Válido"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
								className: "mt-0.5 text-sm text-green-100",
								children: "Verificação realizada com sucesso."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							size: "sm",
							variant: "solid",
							color: "success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip.Label, { children: "Verificado" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card.Body, {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 border-b border-gray-100 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-1 h-5 w-5 shrink-0 text-blue-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "font-medium text-gray-500",
										children: "Documento / Evento"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "h6",
										className: "mt-1 break-words text-gray-900",
										children: result.document.name
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 border-b border-gray-100 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mt-1 h-5 w-5 shrink-0 text-blue-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "font-medium text-gray-500",
										children: "Emitido para"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "h6",
										className: "mt-1 break-words text-gray-900",
										children: result.recipient.name
									})]
								})]
							}),
							result.recipient.city && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
								children: result.recipient.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "font-medium text-gray-500",
										children: "Cidade Polo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "mt-1 font-semibold text-gray-900",
										children: result.recipient.city
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-gray-200 bg-gray-50 p-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "font-medium uppercase tracking-wide text-gray-500",
										children: "Código de Verificação Pública"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typography, {
										type: "small",
										className: "mt-2 break-all font-mono font-bold tracking-wider text-gray-900",
										children: result.verification.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
										type: "small",
										className: "mt-1 uppercase tracking-wide text-green-700",
										children: ["Status: ", result.verification.status === "valid" ? "Válido" : result.verification.status]
									})
								]
							})
						]
					})]
				})
			]
		})
	});
}
var SplitComponent = ValidateDocument;
//#endregion
export { SplitComponent as component };
