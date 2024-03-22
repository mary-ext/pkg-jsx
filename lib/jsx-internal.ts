// deno-lint-ignore-file no-empty-interface no-namespace

import type * as csstype from 'csstype';

import type { JSXNode, TrustedHTML } from './types.ts';

export namespace JSXInternal {
	export type Element = TrustedHTML;

	export interface ElementAttributesProperty {}

	export interface ElementChildrenAttribute {
		// deno-lint-ignore ban-types
		children: {};
	}

	export interface IntrinsicAttributes {}

	export interface IntrinsicElements extends HTMLElementTags, HTMLElementDeprecatedTags, SVGElementTags {}

	/// CSS
	interface CSSProperties extends csstype.PropertiesHyphen {
		// Override
		[key: `--${string}`]: string | number | undefined;
	}

	/// HTML
	export interface HTMLElementTags {
		a: HTMLAnchorAttributes;
		abbr: HTMLAttributes;
		address: HTMLAttributes;
		area: HTMLAreaAttributes;
		article: HTMLAttributes;
		aside: HTMLAttributes;
		audio: HTMLAudioAttributes;
		b: HTMLAttributes;
		base: HTMLBaseAttributes;
		bdi: HTMLAttributes;
		bdo: HTMLAttributes;
		blockquote: HTMLBlockquoteAttributes;
		body: HTMLAttributes;
		br: HTMLAttributes;
		button: HTMLButtonAttributes;
		canvas: HTMLCanvasAttributes;
		caption: HTMLAttributes;
		cite: HTMLAttributes;
		code: HTMLAttributes;
		col: HTMLColAttributes;
		colgroup: HTMLColgroupAttributes;
		data: HTMLDataAttributes;
		datalist: HTMLAttributes;
		dd: HTMLAttributes;
		del: HTMLAttributes;
		details: HTMLDetailsAttributes;
		dfn: HTMLAttributes;
		dialog: HTMLDialogAttributes;
		div: HTMLAttributes;
		dl: HTMLAttributes;
		dt: HTMLAttributes;
		em: HTMLAttributes;
		embed: HTMLEmbedAttributes;
		fieldset: HTMLFieldsetAttributes;
		figcaption: HTMLAttributes;
		figure: HTMLAttributes;
		footer: HTMLAttributes;
		form: HTMLFormAttributes;
		h1: HTMLAttributes;
		h2: HTMLAttributes;
		h3: HTMLAttributes;
		h4: HTMLAttributes;
		h5: HTMLAttributes;
		h6: HTMLAttributes;
		head: HTMLAttributes;
		header: HTMLAttributes;
		hgroup: HTMLAttributes;
		hr: HTMLAttributes;
		html: HTMLAttributes;
		i: HTMLAttributes;
		iframe: HTMLIframeAttributes;
		img: HTMLImgAttributes;
		input: HTMLInputAttributes;
		ins: HTMLInsAttributes;
		kbd: HTMLAttributes;
		label: HTMLLabelAttributes;
		legend: HTMLAttributes;
		li: HTMLLiAttributes;
		link: HTMLLinkAttributes;
		main: HTMLAttributes;
		map: HTMLMapAttributes;
		mark: HTMLAttributes;
		menu: HTMLMenuAttributes;
		meta: HTMLMetaAttributes;
		meter: HTMLMeterAttributes;
		nav: HTMLAttributes;
		noscript: HTMLAttributes;
		object: HTMLObjectAttributes;
		ol: HTMLOlAttributes;
		optgroup: HTMLOptgroupAttributes;
		option: HTMLOptionAttributes;
		output: HTMLOutputAttributes;
		p: HTMLAttributes;
		picture: HTMLAttributes;
		pre: HTMLAttributes;
		progress: HTMLProgressAttributes;
		q: HTMLQuoteAttributes;
		rp: HTMLAttributes;
		rt: HTMLAttributes;
		ruby: HTMLAttributes;
		s: HTMLAttributes;
		samp: HTMLAttributes;
		script: HTMLScriptAttributes;
		search: HTMLAttributes;
		section: HTMLAttributes;
		select: HTMLSelectAttributes;
		slot: HTMLSlotElementAttributes;
		small: HTMLAttributes;
		source: HTMLSourceAttributes;
		span: HTMLAttributes;
		strong: HTMLAttributes;
		style: HTMLStyleAttributes;
		sub: HTMLAttributes;
		summary: HTMLAttributes;
		sup: HTMLAttributes;
		table: HTMLAttributes;
		tbody: HTMLAttributes;
		td: HTMLTdAttributes;
		template: TemplateHTMLAttributes;
		textarea: HTMLTextareaAttributes;
		tfoot: HTMLAttributes;
		th: HTMLThAttributes;
		thead: HTMLAttributes;
		time: HTMLTimeAttributes;
		title: HTMLAttributes;
		tr: HTMLAttributes;
		track: HTMLTrackAttributes;
		u: HTMLAttributes;
		ul: HTMLAttributes;
		var: HTMLAttributes;
		video: HTMLVideoAttributes;
		wbr: HTMLAttributes;
	}

	export interface HTMLElementDeprecatedTags {
		big: HTMLAttributes;
		keygen: HTMLKeygenAttributes;
		menuitem: HTMLAttributes;
		noindex: HTMLAttributes;
		param: HTMLParamAttributes;
	}

	export type HTMLAutocapitalize = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
	export type HTMLDir = 'ltr' | 'rtl' | 'auto';
	export type HTMLFormEncType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
	export type HTMLFormMethod = 'post' | 'get' | 'dialog';
	export type HTMLCrossorigin = 'anonymous' | 'use-credentials' | '';
	export type HTMLReferrerPolicy =
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';
	export type HTMLIframeSandbox =
		| 'allow-downloads-without-user-activation'
		| 'allow-downloads'
		| 'allow-forms'
		| 'allow-modals'
		| 'allow-orientation-lock'
		| 'allow-pointer-lock'
		| 'allow-popups'
		| 'allow-popups-to-escape-sandbox'
		| 'allow-presentation'
		| 'allow-same-origin'
		| 'allow-scripts'
		| 'allow-storage-access-by-user-activation'
		| 'allow-top-navigation'
		| 'allow-top-navigation-by-user-activation'
		| 'allow-top-navigation-to-custom-protocols';
	export type HTMLLinkAs =
		| 'audio'
		| 'document'
		| 'embed'
		| 'fetch'
		| 'font'
		| 'image'
		| 'object'
		| 'script'
		| 'style'
		| 'track'
		| 'video'
		| 'worker';

	/** Contains additional element attributes that are necessary for JSX */
	export interface JSXAttributes {
		children?: JSXNode;
	}

	/** ARIA attributes applicable to any element */
	export interface AriaAttributes {
		/**
		 * Identifies the currently active element when DOM focus is on a composite
		 * widget, textbox, group, or application.
		 */
		'aria-activedescendant'?: string;
		/**
		 * Indicates whether assistive technologies will present all, or only parts
		 * of, the changed region based on the change notifications defined by the
		 * aria-relevant attribute.
		 */
		'aria-atomic'?: 'false' | 'true';
		/**
		 * Indicates whether inputting text could trigger display of one or more
		 * predictions of the user's intended value for an input and specifies how
		 * predictions would be presented if they are made.
		 */
		'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
		/**
		 * Indicates an element is being modified and that assistive technologies
		 * MAY want to wait until the modifications are complete before exposing
		 * them to the user.
		 */
		'aria-busy'?: 'false' | 'true';
		/**
		 * Indicates the current "checked" state of checkboxes, radio buttons, and
		 * other widgets.
		 */
		'aria-checked'?: 'false' | 'mixed' | 'true';
		/**
		 * Defines the total number of columns in a table, grid, or treegrid.
		 */
		'aria-colcount'?: number | string;
		/**
		 * Defines an element's column index or position with respect to the total
		 * number of columns within a table, grid, or treegrid.
		 */
		'aria-colindex'?: number | string;
		/**
		 * Defines the number of columns spanned by a cell or gridcell within a
		 * table, grid, or treegrid.
		 */
		'aria-colspan'?: number | string;
		/**
		 * Identifies the element (or elements) whose contents or presence are
		 * controlled by the current element.
		 */
		'aria-controls'?: string;
		/**
		 * Indicates the element that represents the current item within a container
		 * or set of related elements.
		 */
		'aria-current'?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
		/**
		 * Identifies the element (or elements) that describes the object.
		 */
		'aria-describedby'?: string;
		/**
		 * Defines a string value that describes or annotates the current element.
		 */
		'aria-description'?: string;
		/**
		 * Identifies the element that provides a detailed, extended description for
		 * the object.
		 */
		'aria-details'?: string;
		/**
		 * Indicates that the element is perceivable but disabled, so it is not
		 * editable or otherwise operable.
		 */
		'aria-disabled'?: 'false' | 'true';
		/**
		 * Indicates what functions can be performed when a dragged object is
		 * released on the drop target.
		 * @deprecated in ARIA 1.1
		 */
		'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
		/**
		 * Identifies the element that provides an error message for the object.
		 */
		'aria-errormessage'?: string;
		/**
		 * Indicates whether the element, or another grouping element it controls,
		 * is currently expanded or collapsed.
		 */
		'aria-expanded'?: 'false' | 'true';
		/**
		 * Identifies the next element (or elements) in an alternate reading order
		 * of content which, at the user's discretion, allows assistive technology
		 * to override the general default of reading in document source order.
		 */
		'aria-flowto'?: string;
		/**
		 * Indicates an element's "grabbed" state in a drag-and-drop operation.
		 * @deprecated in ARIA 1.1
		 */
		'aria-grabbed'?: 'false' | 'true';
		/**
		 * Indicates the availability and type of interactive popup element, such
		 * as menu or dialog, that can be triggered by an element.
		 */
		'aria-haspopup'?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
		/**
		 * Indicates whether the element is exposed to an accessibility API.
		 */
		'aria-hidden'?: 'false' | 'true';
		/**
		 * Indicates the entered value does not conform to the format expected by
		 * the application.
		 */
		'aria-invalid'?: 'false' | 'true' | 'grammar' | 'spelling';
		/**
		 * Indicates keyboard shortcuts that an author has implemented to activate
		 * or give focus to an element. */
		'aria-keyshortcuts'?: string;
		/**
		 * Defines a string value that labels the current element.
		 */
		'aria-label'?: string;
		/**
		 * Identifies the element (or elements) that labels the current element.
		 */
		'aria-labelledby'?: string;
		/**
		 * Defines the hierarchical level of an element within a structure.
		 */
		'aria-level'?: number | string;
		/**
		 * Indicates that an element will be updated, and describes the types of
		 *  updates the user agents, assistive technologies, and user can expect
		 * from the live region.
		 */
		'aria-live'?: 'off' | 'assertive' | 'polite';
		/**
		 * Indicates whether an element is modal when displayed.
		 */
		'aria-modal'?: 'false' | 'true';
		/**
		 * Indicates whether a text box accepts multiple lines of input or only a
		 * single line.
		 */
		'aria-multiline'?: 'false' | 'true';
		/**
		 * Indicates that the user may select more than one item from the current
		 * selectable descendants.
		 */
		'aria-multiselectable'?: 'false' | 'true';
		/**
		 *  Indicates whether the element's orientation is horizontal, vertical,
		 * or unknown/ambiguous.
		 */
		'aria-orientation'?: 'horizontal' | 'vertical';
		/**
		 * Identifies an element (or elements) in order to define a visual,
		 * functional, or contextual parent/child relationship between DOM elements
		 * where the DOM hierarchy cannot be used to represent the relationship.
		 */
		'aria-owns'?: string;
		/**
		 * Defines a short hint (a word or short phrase) intended to aid the user
		 * with data entry when the control has no value. A hint could be a sample
		 * value or a brief description of the expected format.
		 */
		'aria-placeholder'?: string;
		/**
		 * Defines an element's number or position in the current set of listitems
		 * or treeitems. Not required if all elements in the set are present in the
		 * DOM.
		 */
		'aria-posinset'?: number | string;
		/**
		 * Indicates the current "pressed" state of toggle buttons.
		 */
		'aria-pressed'?: 'false' | 'mixed' | 'true';
		/**
		 * Indicates that the element is not editable, but is otherwise operable.
		 */
		'aria-readonly'?: 'false' | 'true';
		/**
		 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
		 */
		'aria-relevant'?:
			| 'additions'
			| 'additions removals'
			| 'additions text'
			| 'all'
			| 'removals'
			| 'removals additions'
			| 'removals text'
			| 'text'
			| 'text additions'
			| 'text removals';
		/**
		 * Indicates that user input is required on the element before a form may
		 * be submitted.
		 */
		'aria-required'?: 'false' | 'true';
		/**
		 * Defines a human-readable, author-localized description for the role of an
		 * element.
		 */
		'aria-roledescription'?: string;
		/**
		 * Defines the total number of rows in a table, grid, or treegrid.
		 */
		'aria-rowcount'?: number | string;
		/**
		 * Defines an element's row index or position with respect to the total
		 * number of rows within a table, grid, or treegrid.
		 */
		'aria-rowindex'?: number | string;
		/**
		 * Defines the number of rows spanned by a cell or gridcell within a table,
		 * grid, or treegrid.
		 */
		'aria-rowspan'?: number | string;
		/**
		 * Indicates the current "selected" state of various widgets.
		 */
		'aria-selected'?: 'false' | 'true';
		/**
		 * Defines the number of items in the current set of listitems or treeitems.
		 * Not required if all elements in the set are present in the DOM.
		 */
		'aria-setsize'?: number | string;
		/**
		 * Indicates if items in a table or grid are sorted in ascending or
		 * descending order.
		 */
		'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
		/**
		 * Defines the maximum allowed value for a range widget.
		 */
		'aria-valuemax'?: number | string;
		/**
		 * Defines the minimum allowed value for a range widget.
		 */
		'aria-valuemin'?: number | string;
		/**
		 * Defines the current value for a range widget.
		 */
		'aria-valuenow'?: number | string;
		/**
		 * Defines the human readable text alternative of aria-valuenow for a range widget.
		 */
		'aria-valuetext'?: string;
		role?:
			| 'alert'
			| 'alertdialog'
			| 'application'
			| 'article'
			| 'banner'
			| 'button'
			| 'cell'
			| 'checkbox'
			| 'columnheader'
			| 'combobox'
			| 'complementary'
			| 'contentinfo'
			| 'definition'
			| 'dialog'
			| 'directory'
			| 'document'
			| 'feed'
			| 'figure'
			| 'form'
			| 'grid'
			| 'gridcell'
			| 'group'
			| 'heading'
			| 'img'
			| 'link'
			| 'list'
			| 'listbox'
			| 'listitem'
			| 'log'
			| 'main'
			| 'marquee'
			| 'math'
			| 'menu'
			| 'menubar'
			| 'menuitem'
			| 'menuitemcheckbox'
			| 'menuitemradio'
			| 'meter'
			| 'navigation'
			| 'none'
			| 'note'
			| 'option'
			| 'presentation'
			| 'progressbar'
			| 'radio'
			| 'radiogroup'
			| 'region'
			| 'row'
			| 'rowgroup'
			| 'rowheader'
			| 'scrollbar'
			| 'search'
			| 'searchbox'
			| 'separator'
			| 'slider'
			| 'spinbutton'
			| 'status'
			| 'switch'
			| 'tab'
			| 'table'
			| 'tablist'
			| 'tabpanel'
			| 'term'
			| 'textbox'
			| 'timer'
			| 'toolbar'
			| 'tooltip'
			| 'tree'
			| 'treegrid'
			| 'treeitem';
	}

	export interface ElementEvents {
		onabort?: string;
		onanimationcancel?: string;
		onanimationend?: string;
		onanimationiteration?: string;
		onanimationstart?: string;
		onauxclick?: string;
		onbeforeinput?: string;
		onbeforetoggle?: string;
		onblur?: string;
		oncancel?: string;
		oncanplay?: string;
		oncanplaythrough?: string;
		onchange?: string;
		onclick?: string;
		onclose?: string;
		oncompositionend?: string;
		oncompositionstart?: string;
		oncompositionupdate?: string;
		oncontextmenu?: string;
		oncopy?: string;
		oncuechange?: string;
		oncut?: string;
		ondblclick?: string;
		ondrag?: string;
		ondragend?: string;
		ondragenter?: string;
		ondragleave?: string;
		ondragover?: string;
		ondragstart?: string;
		ondrop?: string;
		ondurationchange?: string;
		onemptied?: string;
		onended?: string;
		onerror?: string;
		onfocus?: string;
		onfocusin?: string;
		onfocusout?: string;
		onformdata?: string;
		ongotpointercapture?: string;
		oninput?: string;
		oninvalid?: string;
		onkeydown?: string;
		onkeypress?: string;
		onkeyup?: string;
		onload?: string;
		onloadeddata?: string;
		onloadedmetadata?: string;
		onloadstart?: string;
		onlostpointercapture?: string;
		onmousedown?: string;
		onmouseenter?: string;
		onmouseleave?: string;
		onmousemove?: string;
		onmouseout?: string;
		onmouseover?: string;
		onmouseup?: string;
		onpaste?: string;
		onpause?: string;
		onplay?: string;
		onplaying?: string;
		onpointercancel?: string;
		onpointerdown?: string;
		onpointerenter?: string;
		onpointerleave?: string;
		onpointermove?: string;
		onpointerout?: string;
		onpointerover?: string;
		onpointerup?: string;
		onprogress?: string;
		onratechange?: string;
		onreset?: string;
		onresize?: string;
		onscroll?: string;
		onscrollend?: string;
		onsecuritypolicyviolation?: string;
		onseeked?: string;
		onseeking?: string;
		onselect?: string;
		onselectionchange?: string;
		onselectstart?: string;
		onslotchange?: string;
		onstalled?: string;
		onsubmit?: string;
		onsuspend?: string;
		ontimeupdate?: string;
		ontoggle?: string;
		ontouchcancel?: string;
		ontouchend?: string;
		ontouchmove?: string;
		ontouchstart?: string;
		ontransitioncancel?: string;
		ontransitionend?: string;
		ontransitionrun?: string;
		ontransitionstart?: string;
		onvolumechange?: string;
		onwaiting?: string;
		onwebkitanimationend?: string;
		onwebkitanimationiteration?: string;
		onwebkitanimationstart?: string;
		onwebkittransitionend?: string;
		onwheel?: string;
	}

	/** Generic HTML attributes, applicable to all elements */
	export interface HTMLAttributes extends ElementEvents, AriaAttributes, JSXAttributes {
		about?: string;
		accesskey?: string;
		autocapitalize?: HTMLAutocapitalize;
		class?: string;
		color?: string;
		contenteditable?: boolean | 'inherit';
		contextmenu?: string;
		datatype?: string;
		dir?: HTMLDir;
		draggable?: 'false' | 'true';
		exportparts?: string;
		hidden?: boolean | 'hidden' | 'until-found';
		id?: string;
		inert?: boolean;
		inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
		itemid?: string;
		itemprop?: string;
		itemref?: string;
		itemscope?: boolean;
		itemtype?: string;
		lang?: string;
		part?: string;
		popover?: 'manual' | 'auto';
		prefix?: string;
		property?: string;
		resource?: string;
		slot?: string;
		spellcheck?: boolean;
		style?: CSSProperties | string;
		tabindex?: number | string;
		title?: string;
		translate?: 'yes' | 'no';
		typeof?: string;
		vocab?: string;
	}

	/** Attributes that are applicable to <audio> and <video> elements */
	export interface MediaHTMLAttributes extends HTMLAttributes {
		autoplay?: boolean;
		controls?: boolean;
		crossorigin?: HTMLCrossorigin;
		loop?: boolean;
		mediagroup?: string;
		muted?: boolean;
		preload?: 'none' | 'metadata' | 'auto' | '';
		src?: string;
	}

	export interface HTMLAnchorAttributes extends HTMLAttributes {
		download?: string;
		href?: string;
		hreflang?: string;
		media?: string;
		ping?: string;
		referrerpolicy?: HTMLReferrerPolicy;
		rel?: string;
		target?: string;
		type?: string;
	}

	export interface HTMLAreaAttributes extends HTMLAttributes {
		alt?: string;
		coords?: string;
		download?: string;
		href?: string;
		hreflang?: string;
		ping?: string;
		referrerpolicy?: HTMLReferrerPolicy;
		rel?: string;
		shape?: 'rect' | 'circle' | 'poly' | 'default';
		target?: string;
	}

	export interface HTMLAudioAttributes extends MediaHTMLAttributes {}

	export interface HTMLBaseAttributes extends HTMLAttributes {
		href?: string;
		target?: string;
	}

	export interface HTMLBlockquoteAttributes extends HTMLAttributes {
		cite?: string;
	}

	export interface HTMLButtonAttributes extends HTMLAttributes {
		autofocus?: boolean;
		disabled?: boolean;
		form?: string;
		formaction?: string;
		formenctype?: HTMLFormEncType;
		formmethod?: HTMLFormMethod;
		formnovalidate?: boolean;
		formtarget?: string;
		name?: string;
		popovertarget?: string;
		popovertargetaction?: 'hide' | 'show' | 'toggle';
		type?: 'submit' | 'reset' | 'button';
		value?: string;
	}

	export interface HTMLCanvasAttributes extends HTMLAttributes {
		width?: number | string;
		height?: number | string;
	}

	export interface HTMLColAttributes extends HTMLAttributes {
		span?: number | string;
		width?: number | string;
	}

	export interface HTMLColgroupAttributes extends HTMLAttributes {
		span?: number | string;
	}

	export interface HTMLDataAttributes extends HTMLAttributes {
		value?: number | string;
	}

	export interface HTMLDetailsAttributes extends HTMLAttributes {
		open?: boolean;

		ontoggle?: string;
	}

	export interface HTMLDialogAttributes extends HTMLAttributes {
		open?: boolean;

		onclose?: string;
		oncancel?: string;
	}

	export interface HTMLEmbedAttributes extends HTMLAttributes {
		height?: number | string;
		src?: string;
		type?: string;
		width?: number | string;
	}

	export interface HTMLFieldsetAttributes extends HTMLAttributes {
		disabled?: boolean;
		form?: string;
		name?: string;
	}

	export interface HTMLFormAttributes extends HTMLAttributes {
		'accept-charset'?: string;
		action?: string;
		autocomplete?: string;
		encoding?: HTMLFormEncType;
		enctype?: HTMLFormEncType;
		method?: HTMLFormMethod;
		name?: string;
		novalidate?: boolean;
		target?: string;
	}

	export interface HTMLIframeAttributes extends HTMLAttributes {
		allow?: string;
		allowfullscreen?: boolean;
		height?: number | string;
		loading?: 'eager' | 'lazy';
		name?: string;
		referrerpolicy?: HTMLReferrerPolicy;
		sandbox?: HTMLIframeSandbox | string;
		src?: string;
		srcdoc?: string;
		width?: number | string;
	}

	export interface HTMLImgAttributes extends HTMLAttributes {
		alt?: string;
		crossorigin?: HTMLCrossorigin;
		decoding?: 'sync' | 'async' | 'auto';
		elementtiming?: string;
		fetchpriority?: 'high' | 'low' | 'auto';
		height?: number | string;
		ismap?: boolean;
		loading?: 'eager' | 'lazy';
		referrerpolicy?: HTMLReferrerPolicy;
		sizes?: string;
		src?: string;
		srcset?: string;
		usemap?: string;
		width?: number | string;
	}

	export interface HTMLInputAttributes extends HTMLAttributes {
		accept?: string;
		alt?: string;
		autocomplete?: string;
		autocorrect?: 'on' | 'off';
		autofocus?: boolean;
		capture?: boolean | string;
		checked?: boolean;
		crossorigin?: HTMLCrossorigin;
		disabled?: boolean;
		enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
		form?: string;
		formaction?: string;
		formenctype?: HTMLFormEncType;
		formmethod?: HTMLFormMethod;
		formnovalidate?: boolean;
		formtarget?: string;
		height?: number | string;
		incremental?: boolean;
		list?: string;
		max?: number | string;
		maxlength?: number | string;
		min?: number | string;
		minlength?: number | string;
		multiple?: boolean;
		name?: string;
		pattern?: string;
		placeholder?: string;
		readonly?: boolean;
		required?: boolean;
		results?: number;
		size?: number | string;
		src?: string;
		step?: number | string;
		type?: string;
		value?: number | string;
		width?: number | string;
	}

	export interface HTMLInsAttributes extends HTMLAttributes {
		cite?: string;
		datetime?: string;
	}

	export interface HTMLKeygenAttributes extends HTMLAttributes {
		autofocus?: boolean;
		challenge?: string;
		disabled?: boolean;
		form?: string;
		keyparams?: string;
		keytype?: string;
		name?: string;
	}

	export interface HTMLLabelAttributes extends HTMLAttributes {
		for?: string;
		form?: string;
	}

	export interface HTMLLiAttributes extends HTMLAttributes {
		value?: number | string;
	}

	export interface HTMLLinkAttributes extends HTMLAttributes {
		as?: HTMLLinkAs;
		crossorigin?: HTMLCrossorigin;
		disabled?: boolean;
		fetchpriority?: 'high' | 'low' | 'auto';
		href?: string;
		hreflang?: string;
		imagesizes?: string;
		imagesrcset?: string;
		integrity?: string;
		media?: string;
		referrerpolicy?: HTMLReferrerPolicy;
		rel?: string;
		sizes?: string;
		type?: string;
	}

	export interface HTMLMapAttributes extends HTMLAttributes {
		name?: string;
	}

	export interface HTMLMenuAttributes extends HTMLAttributes {
		label?: string;
		type?: 'context' | 'toolbar';
	}

	export interface HTMLMetaAttributes extends HTMLAttributes {
		'http-equiv'?: string;
		charset?: string;
		content?: string;
		media?: string;
		name?: string;
	}

	export interface HTMLMeterAttributes extends HTMLAttributes {
		form?: string;
		high?: number | string;
		low?: number | string;
		max?: number | string;
		min?: number | string;
		optimum?: number | string;
		value?: number | string;
	}

	export interface HTMLQuoteAttributes extends HTMLAttributes {
		cite?: string;
	}

	export interface HTMLObjectAttributes extends HTMLAttributes {
		data?: string;
		form?: string;
		height?: number | string;
		name?: string;
		type?: string;
		usemap?: string;
		width?: number | string;
	}

	export interface HTMLOlAttributes extends HTMLAttributes {
		reversed?: boolean;
		start?: number | string;
		type?: '1' | 'a' | 'A' | 'i' | 'I';
	}

	export interface HTMLOptgroupAttributes extends HTMLAttributes {
		disabled?: boolean;
		label?: string;
	}

	export interface HTMLOptionAttributes extends HTMLAttributes {
		disabled?: boolean;
		label?: string;
		selected?: boolean;
		value?: number | string;
	}

	export interface HTMLOutputAttributes extends HTMLAttributes {
		for?: string;
		form?: string;
		name?: string;
	}

	export interface HTMLParamAttributes extends HTMLAttributes {
		name?: string;
		value?: number | string;
	}

	export interface HTMLProgressAttributes extends HTMLAttributes {
		max?: number | string;
		value?: number | string;
	}

	export interface HTMLScriptAttributes extends HTMLAttributes {
		async?: boolean;
		charset?: string;
		crossorigin?: HTMLCrossorigin;
		defer?: boolean;
		integrity?: string;
		nomodule?: boolean;
		nonce?: string;
		referrerpolicy?: HTMLReferrerPolicy;
		src?: string;
		type?: string;
	}

	export interface HTMLSelectAttributes extends HTMLAttributes {
		autocomplete?: string;
		autofocus?: boolean;
		disabled?: boolean;
		form?: string;
		multiple?: boolean;
		name?: string;
		required?: boolean;
		size?: number | string;
		value?: number | string;
	}

	export interface HTMLSlotElementAttributes extends HTMLAttributes {
		name?: string;
	}

	export interface HTMLSourceAttributes extends HTMLAttributes {
		media?: string;
		sizes?: string;
		src?: string;
		srcset?: string;
		type?: string;
	}

	export interface HTMLStyleAttributes extends HTMLAttributes {
		media?: string;
		nonce?: string;
		scoped?: boolean;
		type?: string;
	}

	export interface HTMLTdAttributes extends HTMLAttributes {
		colspan?: number | string;
		headers?: string;
		rowspan?: number | string;
	}

	export interface TemplateHTMLAttributes extends HTMLAttributes {}

	export interface HTMLTextareaAttributes extends HTMLAttributes {
		autocomplete?: string;
		autofocus?: boolean;
		cols?: number | string;
		dirname?: string;
		disabled?: boolean;
		enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
		form?: string;
		maxlength?: number | string;
		minlength?: number | string;
		name?: string;
		placeholder?: string;
		readonly?: boolean;
		required?: boolean;
		rows?: number | string;
		value?: number | string;
		wrap?: 'hard' | 'soft' | 'off';
	}

	export interface HTMLThAttributes extends HTMLAttributes {
		colspan?: number | string;
		headers?: string;
		rowspan?: number | string;
		scope?: 'col' | 'row' | 'rowgroup' | 'colgroup';
	}

	export interface HTMLTimeAttributes extends HTMLAttributes {
		datetime?: string;
	}

	export interface HTMLTrackAttributes extends HTMLAttributes {
		default?: boolean;
		kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
		label?: string;
		src?: string;
		srclang?: string;
	}

	export interface HTMLVideoAttributes extends MediaHTMLAttributes {
		height?: number | string;
		playsinline?: boolean;
		poster?: string;
		width?: number | string;
	}

	/// SVG
	export interface SVGElementTags {
		animate: SVGAnimateAttributes;
		animateMotion: SVGAnimateMotionAttributes;
		animateTransform: SVGAnimateTransformAttributes;
		circle: SVGCircleAttributes;
		clipPath: SVGClipPathAttributes;
		defs: SVGDefsAttributes;
		desc: SVGDescAttributes;
		ellipse: SVGEllipseAttributes;
		feBlend: SVGFeBlendAttributes;
		feColorMatrix: SVGFeColorMatrixAttributes;
		feComponentTransfer: SVGFeComponentTransferAttributes;
		feComposite: SVGFeCompositeAttributes;
		feConvolveMatrix: SVGFeConvolveMatrixAttributes;
		feDiffuseLighting: SVGFeDiffuseLightingAttributes;
		feDisplacementMap: SVGFeDisplacementMapAttributes;
		feDistantLight: SVGFeDistantLightAttributes;
		feDropShadow: SVGFeDropShadowAttributes;
		feFlood: SVGFeFloodAttributes;
		feFuncA: SVGFeFuncAttributes;
		feFuncB: SVGFeFuncAttributes;
		feFuncG: SVGFeFuncAttributes;
		feFuncR: SVGFeFuncAttributes;
		feGaussianBlur: SVGFeGaussianBlurAttributes;
		feImage: SVGFeImageAttributes;
		feMerge: SVGFeMergeAttributes;
		feMergeNode: SVGFeMergeNodeAttributes;
		feMorphology: SVGFeMorphologyAttributes;
		feOffset: SVGFeOffsetAttributes;
		fePointLight: SVGFePointLightAttributes;
		feSpecularLighting: SVGFeSpecularLightingAttributes;
		feSpotLight: SVGFeSpotLightAttributes;
		feTile: SVGFeTileAttributes;
		feTurbulence: SVGFeTurbulanceAttributes;
		filter: SVGFilterAttributes;
		foreignObject: SVGForeignObjectAttributes;
		g: SVGGAttributes;
		image: SVGImageAttributes;
		line: SVGLineAttributes;
		linearGradient: SVGLinearGradientAttributes;
		marker: SVGMarkerAttributes;
		mask: SVGMaskAttributes;
		metadata: SVGMetadataAttributes;
		mpath: SVGMPathAttributes;
		path: SVGPathAttributes;
		pattern: SVGPatternAttributes;
		polygon: SVGPolygonAttributes;
		polyline: SVGPolylineAttributes;
		radialGradient: SVGRadialGradientAttributes;
		rect: SVGRectAttributes;
		set: SVGSetAttributes;
		stop: SVGStopAttributes;
		svg: SVGSvgAttributes;
		switch: SVGSwitchAttributes;
		symbol: SVGSymbolAttributes;
		text: SVGTextAttributes;
		textPath: SVGTextPathAttributes;
		tspan: SVGTSpanAttributes;
		use: SVGUseAttributes;
		view: SVGViewAttributes;
	}

	export type SVGPreserveAspectRatio =
		| 'none'
		| 'xMinYMin'
		| 'xMidYMin'
		| 'xMaxYMin'
		| 'xMinYMid'
		| 'xMidYMid'
		| 'xMaxYMid'
		| 'xMinYMax'
		| 'xMidYMax'
		| 'xMaxYMax'
		| 'xMinYMin meet'
		| 'xMidYMin meet'
		| 'xMaxYMin meet'
		| 'xMinYMid meet'
		| 'xMidYMid meet'
		| 'xMaxYMid meet'
		| 'xMinYMax meet'
		| 'xMidYMax meet'
		| 'xMaxYMax meet'
		| 'xMinYMin slice'
		| 'xMidYMin slice'
		| 'xMaxYMin slice'
		| 'xMinYMid slice'
		| 'xMidYMid slice'
		| 'xMaxYMid slice'
		| 'xMinYMax slice'
		| 'xMidYMax slice'
		| 'xMaxYMax slice';
	export type ImagePreserveAspectRatio =
		| SVGPreserveAspectRatio
		| 'defer none'
		| 'defer xMinYMin'
		| 'defer xMidYMin'
		| 'defer xMaxYMin'
		| 'defer xMinYMid'
		| 'defer xMidYMid'
		| 'defer xMaxYMid'
		| 'defer xMinYMax'
		| 'defer xMidYMax'
		| 'defer xMaxYMax'
		| 'defer xMinYMin meet'
		| 'defer xMidYMin meet'
		| 'defer xMaxYMin meet'
		| 'defer xMinYMid meet'
		| 'defer xMidYMid meet'
		| 'defer xMaxYMid meet'
		| 'defer xMinYMax meet'
		| 'defer xMidYMax meet'
		| 'defer xMaxYMax meet'
		| 'defer xMinYMin slice'
		| 'defer xMidYMin slice'
		| 'defer xMaxYMin slice'
		| 'defer xMinYMid slice'
		| 'defer xMidYMid slice'
		| 'defer xMaxYMid slice'
		| 'defer xMinYMax slice'
		| 'defer xMidYMax slice'
		| 'defer xMaxYMax slice';

	export type SVGUnits = 'userSpaceOnUse' | 'objectBoundingBox';

	export interface CoreSVGAttributes extends AriaAttributes, JSXAttributes {
		id?: string;
		lang?: string;
		tabindex?: number | string;
	}

	export interface StylableSVGAttributes {
		class?: string;
		style?: CSSProperties | string;
	}

	export interface TransformableSVGAttributes {
		transform?: string;
	}

	export interface ConditionalProcessingSVGAttributes {
		requiredExtensions?: string;
		requiredFeatures?: string;
		systemLanguage?: string;
	}

	export interface ExternalResourceSVGAttributes {
		externalResourcesRequired?: 'true' | 'false';
	}

	export interface AnimationTimingSVGAttributes {
		begin?: string;
		dur?: string;
		end?: string;
		fill?: 'freeze' | 'remove';
		max?: string;
		min?: string;
		repeatCount?: number | 'indefinite';
		repeatDur?: string;
		restart?: 'always' | 'whenNotActive' | 'never';
	}

	export interface AnimationValueSVGAttributes {
		by?: number | string;
		calcMode?: 'discrete' | 'linear' | 'paced' | 'spline';
		from?: number | string;
		keySplines?: string;
		keyTimes?: string;
		to?: number | string;
		values?: string;
	}

	export interface AnimationAdditionSVGAttributes {
		accumulate?: 'none' | 'sum';
		additive?: 'replace' | 'sum';
		attributeName?: string;
	}

	export interface AnimationAttributeTargetSVGAttributes {
		attributeName?: string;
		attributeType?: 'CSS' | 'XML' | 'auto';
	}

	export interface PresentationSVGAttributes {
		'alignment-baseline'?:
			| 'auto'
			| 'baseline'
			| 'before-edge'
			| 'text-before-edge'
			| 'middle'
			| 'central'
			| 'after-edge'
			| 'text-after-edge'
			| 'ideographic'
			| 'alphabetic'
			| 'hanging'
			| 'mathematical'
			| 'inherit';
		'baseline-shift'?: number | string;
		clip?: string;
		'clip-path'?: string;
		'clip-rule'?: 'nonzero' | 'evenodd' | 'inherit';
		color?: string;
		'color-interpolation'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
		'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
		'color-profile'?: string;
		'color-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit';
		cursor?: string;
		direction?: 'ltr' | 'rtl' | 'inherit';
		display?: string;
		'dominant-baseline'?:
			| 'auto'
			| 'text-bottom'
			| 'alphabetic'
			| 'ideographic'
			| 'middle'
			| 'central'
			| 'mathematical'
			| 'hanging'
			| 'text-top'
			| 'inherit';
		'enable-background'?: string;
		fill?: string;
		'fill-opacity'?: number | string | 'inherit';
		'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit';
		filter?: string;
		'flood-color'?: string;
		'flood-opacity'?: number | string | 'inherit';
		'font-family'?: string;
		'font-size'?: string;
		'font-size-adjust'?: number | string;
		'font-stretch'?: string;
		'font-style'?: 'normal' | 'italic' | 'oblique' | 'inherit';
		'font-variant'?: string;
		'font-weight'?: number | string;
		'glyph-orientation-horizontal'?: string;
		'glyph-orientation-vertical'?: string;
		'image-rendering'?: 'auto' | 'optimizeQuality' | 'optimizeSpeed' | 'inherit';
		kerning?: string;
		'letter-spacing'?: number | string;
		'lighting-color'?: string;
		'marker-end'?: string;
		'marker-mid'?: string;
		'marker-start'?: string;
		mask?: string;
		opacity?: number | string | 'inherit';
		overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit';
		pathLength?: number | string;
		'pointer-events'?:
			| 'bounding-box'
			| 'visiblePainted'
			| 'visibleFill'
			| 'visibleStroke'
			| 'visible'
			| 'painted'
			| 'color'
			| 'fill'
			| 'stroke'
			| 'all'
			| 'none'
			| 'inherit';
		'shape-rendering'?: 'auto' | 'optimizeSpeed' | 'crispEdges' | 'geometricPrecision' | 'inherit';
		'stop-color'?: string;
		'stop-opacity'?: number | string | 'inherit';
		stroke?: string;
		'stroke-dasharray'?: string;
		'stroke-dashoffset'?: number | string;
		'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit';
		'stroke-linejoin'?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round' | 'inherit';
		'stroke-miterlimit'?: number | string | 'inherit';
		'stroke-opacity'?: number | string | 'inherit';
		'stroke-width'?: number | string;
		'text-anchor'?: 'start' | 'middle' | 'end' | 'inherit';
		'text-decoration'?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit';
		'text-rendering'?: 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'inherit';
		'unicode-bidi'?: string;
		visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit';
		'word-spacing'?: number | string;
		'writing-mode'?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb' | 'inherit';
	}

	export interface AnimationElementSVGAttributes
		extends CoreSVGAttributes, ExternalResourceSVGAttributes, ConditionalProcessingSVGAttributes {}

	export interface ContainerElementSVGAttributes extends
		CoreSVGAttributes,
		ShapeElementSVGAttributes,
		Pick<
			PresentationSVGAttributes,
			| 'clip-path'
			| 'mask'
			| 'cursor'
			| 'opacity'
			| 'filter'
			| 'enable-background'
			| 'color-interpolation'
			| 'color-rendering'
		> {}

	export interface FilterPrimitiveElementSVGAttributes
		extends CoreSVGAttributes, Pick<PresentationSVGAttributes, 'color-interpolation-filters'> {
		height?: number | string;
		result?: string;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SingleInputFilterSVGAttributes {
		in?: string;
	}

	export interface DoubleInputFilterSVGAttributes {
		in?: string;
		in2?: string;
	}

	export interface FitToViewBoxSVGAttributes {
		preserveAspectRatio?: SVGPreserveAspectRatio;
		viewBox?: string;
	}

	export interface GradientElementSVGAttributes
		extends CoreSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes {
		gradientTransform?: string;
		gradientUnits?: SVGUnits;
		href?: string;
		spreadMethod?: 'pad' | 'reflect' | 'repeat';
	}

	export interface GraphicsElementSVGAttributes extends
		CoreSVGAttributes,
		Pick<
			PresentationSVGAttributes,
			| 'clip-rule'
			| 'mask'
			| 'pointer-events'
			| 'cursor'
			| 'opacity'
			| 'filter'
			| 'display'
			| 'visibility'
			| 'color-interpolation'
			| 'color-rendering'
		> {}

	export interface LightSourceElementSVGAttributes extends CoreSVGAttributes {}

	export interface NewViewportSVGAttributes
		extends CoreSVGAttributes, Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
		viewBox?: string;
	}

	export interface ShapeElementSVGAttributes extends
		CoreSVGAttributes,
		Pick<
			PresentationSVGAttributes,
			| 'color'
			| 'fill'
			| 'fill-rule'
			| 'fill-opacity'
			| 'stroke'
			| 'stroke-width'
			| 'stroke-linecap'
			| 'stroke-linejoin'
			| 'stroke-miterlimit'
			| 'stroke-dasharray'
			| 'stroke-dashoffset'
			| 'stroke-opacity'
			| 'shape-rendering'
			| 'pathLength'
		> {}

	export interface TextContentElementSVGAttributes extends
		CoreSVGAttributes,
		Pick<
			PresentationSVGAttributes,
			| 'font-family'
			| 'font-style'
			| 'font-variant'
			| 'font-weight'
			| 'font-stretch'
			| 'font-size'
			| 'font-size-adjust'
			| 'kerning'
			| 'letter-spacing'
			| 'word-spacing'
			| 'text-decoration'
			| 'glyph-orientation-horizontal'
			| 'glyph-orientation-vertical'
			| 'direction'
			| 'unicode-bidi'
			| 'text-anchor'
			| 'dominant-baseline'
			| 'color'
			| 'fill'
			| 'fill-rule'
			| 'fill-opacity'
			| 'stroke'
			| 'stroke-width'
			| 'stroke-linecap'
			| 'stroke-linejoin'
			| 'stroke-miterlimit'
			| 'stroke-dasharray'
			| 'stroke-dashoffset'
			| 'stroke-opacity'
		> {}

	export interface ZoomAndPanSVGAttributes {
		zoomAndPan?: 'disable' | 'magnify';
	}

	export interface SVGAnimateAttributes
		extends
			AnimationElementSVGAttributes,
			AnimationAttributeTargetSVGAttributes,
			AnimationTimingSVGAttributes,
			AnimationValueSVGAttributes,
			AnimationAdditionSVGAttributes,
			Pick<PresentationSVGAttributes, 'color-interpolation' | 'color-rendering'> {}

	export interface SVGAnimateMotionAttributes
		extends
			AnimationElementSVGAttributes,
			AnimationTimingSVGAttributes,
			AnimationValueSVGAttributes,
			AnimationAdditionSVGAttributes {
		keyPoints?: string;
		origin?: 'default';
		path?: string;
		rotate?: number | string | 'auto' | 'auto-reverse';
	}

	export interface SVGAnimateTransformAttributes
		extends
			AnimationElementSVGAttributes,
			AnimationAttributeTargetSVGAttributes,
			AnimationTimingSVGAttributes,
			AnimationValueSVGAttributes,
			AnimationAdditionSVGAttributes {
		type?: 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY';
	}

	export interface SVGCircleAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes {
		cx?: number | string;
		cy?: number | string;
		r?: number | string;
	}

	export interface SVGClipPathAttributes
		extends
			CoreSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'clip-path'> {
		clipPathUnits?: SVGUnits;
	}

	export interface SVGDefsAttributes
		extends
			ContainerElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes {}

	export interface SVGDescAttributes extends CoreSVGAttributes, StylableSVGAttributes {}

	export interface SVGEllipseAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes {
		cx?: number | string;
		cy?: number | string;
		rx?: number | string;
		ry?: number | string;
	}

	export interface SVGFeBlendAttributes
		extends FilterPrimitiveElementSVGAttributes, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
		mode?: 'normal' | 'multiply' | 'screen' | 'darken' | 'lighten';
	}

	export interface SVGFeColorMatrixAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {
		type?: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha';
		values?: string;
	}

	export interface SVGFeComponentTransferAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {}

	export interface SVGFeCompositeAttributes
		extends FilterPrimitiveElementSVGAttributes, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
		k1?: number | string;
		k2?: number | string;
		k3?: number | string;
		k4?: number | string;
		operator?: 'over' | 'in' | 'out' | 'atop' | 'xor' | 'arithmetic';
	}

	export interface SVGFeConvolveMatrixAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {
		bias?: number | string;
		divisor?: number | string;
		edgeMode?: 'duplicate' | 'wrap' | 'none';
		kernelMatrix?: string;
		kernelUnitLength?: number | string;
		order?: number | string;
		preserveAlpha?: 'true' | 'false';
		targetX?: number | string;
		targetY?: number | string;
	}

	export interface SVGFeDiffuseLightingAttributes
		extends
			FilterPrimitiveElementSVGAttributes,
			SingleInputFilterSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'color' | 'lighting-color'> {
		diffuseConstant?: number | string;
		kernelUnitLength?: number | string;
		surfaceScale?: number | string;
	}

	export interface SVGFeDisplacementMapAttributes
		extends FilterPrimitiveElementSVGAttributes, DoubleInputFilterSVGAttributes, StylableSVGAttributes {
		scale?: number | string;
		xChannelSelector?: 'R' | 'G' | 'B' | 'A';
		yChannelSelector?: 'R' | 'G' | 'B' | 'A';
	}

	export interface SVGFeDistantLightAttributes extends LightSourceElementSVGAttributes {
		azimuth?: number | string;
		elevation?: number | string;
	}

	export interface SVGFeDropShadowAttributes extends CoreSVGAttributes {
		dx?: number | string;
		dy?: number | string;
		in1?: string;
		stdDeviationX?: number | string;
		stdDeviationY?: number | string;
	}

	export interface SVGFeFloodAttributes
		extends
			FilterPrimitiveElementSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'color' | 'flood-color' | 'flood-opacity'> {}

	export interface SVGFeFuncAttributes extends CoreSVGAttributes {
		amplitude?: number | string;
		exponent?: number | string;
		intercept?: number | string;
		offset?: number | string;
		slope?: number | string;
		tableValues?: string;
		type?: 'identity' | 'table' | 'discrete' | 'linear' | 'gamma';
	}

	export interface SVGFeGaussianBlurAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {
		stdDeviation?: number | string;
	}

	export interface SVGFeImageAttributes
		extends FilterPrimitiveElementSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes {
		href?: string;
		preserveAspectRatio?: SVGPreserveAspectRatio;
	}

	export interface SVGFeMergeAttributes extends FilterPrimitiveElementSVGAttributes, StylableSVGAttributes {}

	export interface SVGFeMergeNodeAttributes extends CoreSVGAttributes, SingleInputFilterSVGAttributes {}

	export interface SVGFeMorphologyAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {
		operator?: 'erode' | 'dilate';
		radius?: number | string;
	}

	export interface SVGFeOffsetAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {
		dx?: number | string;
		dy?: number | string;
	}

	export interface SVGFePointLightAttributes extends LightSourceElementSVGAttributes {
		x?: number | string;
		y?: number | string;
		z?: number | string;
	}

	export interface SVGFeSpecularLightingAttributes
		extends
			FilterPrimitiveElementSVGAttributes,
			SingleInputFilterSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'color' | 'lighting-color'> {
		kernelUnitLength?: number | string;
		specularConstant?: string;
		specularExponent?: string;
		surfaceScale?: string;
	}

	export interface SVGFeSpotLightAttributes extends LightSourceElementSVGAttributes {
		limitingConeAngle?: number | string;
		pointsAtX?: number | string;
		pointsAtY?: number | string;
		pointsAtZ?: number | string;
		specularExponent?: number | string;
		x?: number | string;
		y?: number | string;
		z?: number | string;
	}

	export interface SVGFeTileAttributes
		extends FilterPrimitiveElementSVGAttributes, SingleInputFilterSVGAttributes, StylableSVGAttributes {}

	export interface SVGFeTurbulanceAttributes
		extends FilterPrimitiveElementSVGAttributes, StylableSVGAttributes {
		baseFrequency?: number | string;
		numOctaves?: number | string;
		seed?: number | string;
		stitchTiles?: 'stitch' | 'noStitch';
		type?: 'fractalNoise' | 'turbulence';
	}

	export interface SVGFilterAttributes
		extends CoreSVGAttributes, ExternalResourceSVGAttributes, StylableSVGAttributes {
		filterRes?: number | string;
		filterUnits?: SVGUnits;
		height?: number | string;
		primitiveUnits?: SVGUnits;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGForeignObjectAttributes
		extends
			NewViewportSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'display' | 'visibility'> {
		height?: number | string;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGGAttributes
		extends
			ContainerElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'display' | 'visibility'> {}

	export interface SVGImageAttributes
		extends
			NewViewportSVGAttributes,
			GraphicsElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'color-profile' | 'image-rendering'> {
		height?: number | string;
		href?: string;
		preserveAspectRatio?: ImagePreserveAspectRatio;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGLineAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
		x1?: number | string;
		y1?: number | string;
		x2?: number | string;
		y2?: number | string;
	}

	export interface SVGLinearGradientAttributes extends GradientElementSVGAttributes {
		x1?: number | string;
		x2?: number | string;
		y1?: number | string;
		y2?: number | string;
	}

	export interface SVGMarkerAttributes
		extends
			ContainerElementSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			FitToViewBoxSVGAttributes,
			Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
		markerHeight?: number | string;
		markerUnits?: 'strokeWidth' | 'userSpaceOnUse';
		markerWidth?: number | string;
		orient?: string;
		refX?: number | string;
		refY?: number | string;
	}

	export interface SVGMaskAttributes
		extends
			Omit<ContainerElementSVGAttributes, 'opacity' | 'filter'>,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes {
		height?: number | string;
		maskContentUnits?: SVGUnits;
		maskUnits?: SVGUnits;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGMetadataAttributes extends CoreSVGAttributes {}

	export interface SVGMPathAttributes extends CoreSVGAttributes {}

	export interface SVGPathAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
		d?: string;
		pathLength?: number | string;
	}

	export interface SVGPatternAttributes
		extends
			ContainerElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			FitToViewBoxSVGAttributes,
			Pick<PresentationSVGAttributes, 'overflow' | 'clip'> {
		height?: number | string;
		href?: string;
		patternContentUnits?: SVGUnits;
		patternTransform?: string;
		patternUnits?: SVGUnits;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGPolygonAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
		points?: string;
	}

	export interface SVGPolylineAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'marker-start' | 'marker-mid' | 'marker-end'> {
		points?: string;
	}

	export interface SVGRadialGradientAttributes extends GradientElementSVGAttributes {
		cx?: number | string;
		cy?: number | string;
		fx?: number | string;
		fy?: number | string;
		r?: number | string;
	}

	export interface SVGRectAttributes
		extends
			GraphicsElementSVGAttributes,
			ShapeElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes {
		height?: number | string;
		rx?: number | string;
		ry?: number | string;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGSetAttributes extends CoreSVGAttributes {}

	export interface SVGStopAttributes
		extends
			CoreSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'color' | 'stop-color' | 'stop-opacity'> {
		offset?: number | string;
	}

	export interface SVGSvgAttributes
		extends
			ContainerElementSVGAttributes,
			NewViewportSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			FitToViewBoxSVGAttributes,
			ZoomAndPanSVGAttributes,
			PresentationSVGAttributes {
		baseProfile?: string;
		contentScriptType?: string;
		contentStyleType?: string;
		height?: number | string;
		version?: string;
		width?: number | string;
		x?: number | string;
		xmlns?: string;
		y?: number | string;
	}

	export interface SVGSwitchAttributes
		extends
			ContainerElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'display' | 'visibility'> {}

	export interface SVGSymbolAttributes
		extends
			ContainerElementSVGAttributes,
			NewViewportSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			FitToViewBoxSVGAttributes {
		height?: number | string;
		preserveAspectRatio?: SVGPreserveAspectRatio;
		refX?: number | string;
		refY?: number | string;
		viewBox?: string;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGTextAttributes
		extends
			TextContentElementSVGAttributes,
			GraphicsElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			TransformableSVGAttributes,
			Pick<PresentationSVGAttributes, 'writing-mode' | 'text-rendering'> {
		dx?: number | string;
		dy?: number | string;
		lengthAdjust?: 'spacing' | 'spacingAndGlyphs';
		rotate?: number | string;
		textLength?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGTextPathAttributes
		extends
			TextContentElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
		href?: string;
		method?: 'align' | 'stretch';
		spacing?: 'auto' | 'exact';
		startOffset?: number | string;
	}

	export interface SVGTSpanAttributes
		extends
			TextContentElementSVGAttributes,
			ConditionalProcessingSVGAttributes,
			ExternalResourceSVGAttributes,
			StylableSVGAttributes,
			Pick<PresentationSVGAttributes, 'alignment-baseline' | 'baseline-shift' | 'display' | 'visibility'> {
		dx?: number | string;
		dy?: number | string;
		lengthAdjust?: 'spacing' | 'spacingAndGlyphs';
		rotate?: number | string;
		textLength?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGUseAttributes extends CoreSVGAttributes, StylableSVGAttributes {
		height?: number | string;
		href?: string;
		width?: number | string;
		x?: number | string;
		y?: number | string;
	}

	export interface SVGViewAttributes
		extends
			CoreSVGAttributes,
			StylableSVGAttributes,
			ConditionalProcessingSVGAttributes,
			GraphicsElementSVGAttributes,
			PresentationSVGAttributes,
			ExternalResourceSVGAttributes,
			TransformableSVGAttributes {
		viewTarget?: string;
	}
}
