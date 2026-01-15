"use client";

import styles from "./FormCode.module.css";

export default function FormCode({ inputs }) {
	if (!inputs) return null;

	return (
		<div className={styles.formCodeWrapper}>
			<pre className="language-js">
				<code>
					<div>
						<span className="token keyword">const</span> message{" "}
						<span className="token operator">=</span>{" "}
						<span className="token punctuation">{`{`}</span>
					</div>

					<div style={{ paddingLeft: "1rem" }}>
						<span className="token literal-property property">name</span>
						<span className="token operator">:</span>{" "}
						<span className="token string">&quot;{inputs.name}&quot;</span>,
					</div>

					<div style={{ paddingLeft: "1rem" }}>
						<span className="token literal-property property">email</span>
						<span className="token operator">:</span>{" "}
						<span className="token string">&quot;{inputs.email}&quot;</span>,
					</div>

					<div style={{ paddingLeft: "1rem" }}>
						<span className="token literal-property property">message</span>
						<span className="token operator">:</span>{" "}
						<span
							className="token string"
							style={{ whiteSpace: "break-spaces" }}
						>
							&quot;{inputs.message}&quot;
						</span>
					</div>

					<span className="token punctuation">{`}`}</span>
				</code>
			</pre>
		</div>
	);
}
