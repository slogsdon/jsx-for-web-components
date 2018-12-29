/**
 * Library types
 *
 * @module jsx-for-web-components/types
 */

import * as CSS from "csstype";

/**
 * Acceptable node types
 */
export type NodeLike = INode | string;

/**
 * Acceptable references to elements
 *
 * When a `string` is used, it refers to intrinsic elements
 * (DOM native).
 *
 * When a `function` is used, it refers to functional components.
 *
 * TODO: Support classes for components.
 */
export type NodeType = string | ((props: IProps) => NodeLike);

/**
 * Acceptable property value types
 */
export type PropValue = boolean | string | NodeLike[];

/**
 * Describe potential component properties
 *
 * TODO: explicitly set allowed property names?
 */
export interface IProps {
  [key: string]: PropValue;
}

/**
 * Describe the DOM tree node
 */
export interface INode {
  children: NodeLike[];
  props: IProps;
  type: NodeType;
}

/**
 * A stateless component
 */
export class StatelessComponent<P> {
  public props: P;

  public constructor(props: P) {
    this.props = props;
  }

  public render(): NodeLike {
    return "";
  }
}

/**
 * Expose global scope types for strict typing
 */
declare global {
  namespace JSX {
    type EventHandlerAttributeValue = string;
    type AriaRole =
      | "alert"
      | "alertdialog"
      | "application"
      | "directory"
      | "document"
      | "feed"
      | "grid"
      | "gridcell"
      | "group"
      | "log"
      | "marquee"
      | "menu"
      | "menubar"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "none"
      | "note"
      | "presentation"
      | "scrollbar"
      | "search"
      | "status"
      | "switch"
      | "tab"
      | "tablist"
      | "tabpanel"
      | "timer"
      | "toolbar"
      | "tooltip"
      | "tree"
      | "treegrid"
      | "treeitem";
    type HTTPEquivalent =
      | "content-language"
      | "content-security-policy"
      | "content-type"
      | "refresh"
      | "set-cookie";
    type MetaName =
      | "application-name"
      | "author"
      | "description"
      | "generator"
      | "keywords"
      | "referrer"
      | "creator"
      | "googlebot"
      | "publisher"
      | "robots"
      | "slurp"
      | "viewport";
    type SandboxPolicy =
      | "allow-forms"
      | "allow-modals"
      | "allow-orientation-lock"
      | "allow-pointer-lock"
      | "allow-popups"
      | "allow-popups-to-escape-sandbox"
      | "allow-presentation"
      | "allow-same-origin"
      | "allow-scripts"
      | "allow-storage-access-by-user-activation"
      | "allow-top-navigation"
      | "allow-top-navigation-by-user-activation";
    type InputElementType =
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "password"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "submit"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week";
    type AutoCompleteOption =
      | "off"
      | "on";
    type AutoCapitalizeOption =
      | "off"
      | "none"
      | "on"
      | "sentences"
      | "words"
      | "characters";
    type TargetOption =
      | "_self"
      | "_blank"
      | "_parent"
      | "_top"
      | string;
    type CrossOriginOption =
      | "anonymous"
      | "use-credentials";
    type FormMediaType =
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain";
    type FormMethod =
      | "get"
      | "post";

    interface IEventHandlerAttributes {
        onabort?: EventHandlerAttributeValue;
        onautocomplete?: EventHandlerAttributeValue;
        onautocompleteerror?: EventHandlerAttributeValue;
        onblur?: EventHandlerAttributeValue;
        oncancel?: EventHandlerAttributeValue;
        oncanplay?: EventHandlerAttributeValue;
        oncanplaythrough?: EventHandlerAttributeValue;
        onchange?: EventHandlerAttributeValue;
        onclick?: EventHandlerAttributeValue;
        onclose?: EventHandlerAttributeValue;
        oncontextmenu?: EventHandlerAttributeValue;
        oncuechange?: EventHandlerAttributeValue;
        ondblclick?: EventHandlerAttributeValue;
        ondrag?: EventHandlerAttributeValue;
        ondragend?: EventHandlerAttributeValue;
        ondragenter?: EventHandlerAttributeValue;
        ondragexit?: EventHandlerAttributeValue;
        ondragleave?: EventHandlerAttributeValue;
        ondragover?: EventHandlerAttributeValue;
        ondragstart?: EventHandlerAttributeValue;
        ondrop?: EventHandlerAttributeValue;
        ondurationchange?: EventHandlerAttributeValue;
        onemptied?: EventHandlerAttributeValue;
        onended?: EventHandlerAttributeValue;
        onerror?: EventHandlerAttributeValue;
        onfocus?: EventHandlerAttributeValue;
        oninput?: EventHandlerAttributeValue;
        oninvalid?: EventHandlerAttributeValue;
        onkeydown?: EventHandlerAttributeValue;
        onkeypress?: EventHandlerAttributeValue;
        onkeyup?: EventHandlerAttributeValue;
        onload?: EventHandlerAttributeValue;
        onloadeddata?: EventHandlerAttributeValue;
        onloadedmetadata?: EventHandlerAttributeValue;
        onloadstart?: EventHandlerAttributeValue;
        onmousedown?: EventHandlerAttributeValue;
        onmouseenter?: EventHandlerAttributeValue;
        onmouseleave?: EventHandlerAttributeValue;
        onmousemove?: EventHandlerAttributeValue;
        onmouseout?: EventHandlerAttributeValue;
        onmouseover?: EventHandlerAttributeValue;
        onmouseup?: EventHandlerAttributeValue;
        onmousewheel?: EventHandlerAttributeValue;
        onpause?: EventHandlerAttributeValue;
        onplay?: EventHandlerAttributeValue;
        onplaying?: EventHandlerAttributeValue;
        onprogress?: EventHandlerAttributeValue;
        onratechange?: EventHandlerAttributeValue;
        onreset?: EventHandlerAttributeValue;
        onresize?: EventHandlerAttributeValue;
        onscroll?: EventHandlerAttributeValue;
        onseeked?: EventHandlerAttributeValue;
        onseeking?: EventHandlerAttributeValue;
        onselect?: EventHandlerAttributeValue;
        onshow?: EventHandlerAttributeValue;
        onsort?: EventHandlerAttributeValue;
        onstalled?: EventHandlerAttributeValue;
        onsubmit?: EventHandlerAttributeValue;
        onsuspend?: EventHandlerAttributeValue;
        ontimeupdate?: EventHandlerAttributeValue;
        ontoggle?: EventHandlerAttributeValue;
        onvolumechange?: EventHandlerAttributeValue;
        onwaiting?: EventHandlerAttributeValue;
    }
    interface IAriaAttributes {
      "aria-activedescendant"?: string;
      "aria-atomic"?: boolean;
      "aria-autocomplete"?: "inline" | "list" | "both" | "none";
      "aria-busy"?: boolean;
      "aria-checked"?: true | false | "mixed";
      "aria-colcount"?: number;
      "aria-colindex"?: number;
      "aria-colspan"?: number;
      "aria-controls"?: string;
      "aria-current"?: "page" | "step" | "location" | "date" | "time" | true | false;
      "aria-describedby"?: string;
      "aria-details"?: string;
      "aria-disabled"?: boolean;
      "aria-dropeffect"?: "copy" | "execute" | "link" | "move" | "none" | "popup";
      "aria-errormessage"?: string;
      "aria-expanded"?: boolean;
      "aria-flowto"?: string;
      "aria-grabbed"?: boolean;
      "aria-haspopup"?: false | true | "menu" | "listbox" | "tree" | "grid" | "dialog";
      "aria-hidden"?: boolean;
      "aria-invalid"?: "grammar" | false | "spelling" | true;
      "aria-keyshortcuts"?: string;
      "aria-label"?: string;
      "aria-labelledby"?: string;
      "aria-level"?: number;
      "aria-live"?: "assertive" | "off" | "polite";
      "aria-modal"?: boolean;
      "aria-multiline"?: boolean;
      "aria-multiselectable"?: boolean;
      "aria-orientation"?: "horizontal" | "vertical";
      "aria-owns"?: string;
      "aria-placeholder"?: string;
      "aria-posinset"?: number;
      "aria-pressed"?: true | "mixed" | false;
      "aria-readonly"?: boolean;
      "aria-relevant"?: "additions" | "additions text" | "all" | "removals" | "text";
      "aria-required"?: boolean;
      "aria-roledescription"?: string;
      "aria-rowcount"?: number;
      "aria-rowindex"?: number;
      "aria-rowspan"?: number;
      "aria-selected"?: boolean;
      "aria-setsize"?: number;
      "aria-sort"?: "ascending" | "descending" | "none" | "other";
      "aria-valuemax"?: number;
      "aria-valuemin"?: number;
      "aria-valuenow"?: number;
      "aria-valuetext"?: string;
      // allow for unknown `aria-` attributes
      [key: string]: number | string | boolean | undefined;
    }
    interface IDataAttributes {
      // allow for the various `data-` attributes
      [key: string]: number | string | boolean | undefined;
    }
    interface IMicroDataAttributes {
      itemid?: string;
      itemprop?: string;
      itemref?: string;
      itemscope?: string;
      itemtype?: string;
    }
    interface IGlobalElementAttributes {
      accesskey?: string;
      autocapitalize?: AutoCapitalizeOption;
      class?: string;
      contenteditable?: boolean;
      contextmenu?: string;
      dir?: "ltr" | "rtl" | "auto";
      draggable?: boolean;
      dropzone?: "copy" | "move" | "link";
      hidden?: boolean;
      id?: string;
      inputmodee?: string;
      is?: string;
      lang?: string;
      role?: AriaRole;
      slot?: keyof IntrinsicElements;
      spellcheck?: boolean;
      style?: CSS.Properties<string | number>;
      tabindex?: number;
      title?: string;
      translate?: "" | "yes" | "no";
    }
    interface IHTMLElementAttributes {
      xmlns?: string;
    }
    interface IBaseElementAttributes {
      href?: string;
      target?: TargetOption;
    }
    interface ILinkElementAttributes {
      as?: string;
      crossorigin?: CrossOriginOption;
      href?: string;
      hreflang?: string;
      importance?: "auto" | "high" | "low";
      integrity?: string;
      media?: string;
      referrerpolicy?: ReferrerPolicy;
      rel?: string;
      sizes?: "any" | string;
      title?: string;
      type?: string;
    }
    interface IMetaElementAttributes {
      charset?: string;
      content?: string;
      "http-equiv"?: HTTPEquivalent;
      name?: MetaName;
    }
    interface IStyleElementAttributes {
      type?: string;
      media?: string;
      nonce?: string;
      title?: string;
    }
    interface IBodyElementAttributes {
      onafterprint?: EventHandlerAttributeValue;
      onbeforeprint?: EventHandlerAttributeValue;
      onbeforeunload?: EventHandlerAttributeValue;
      onhashchange?: EventHandlerAttributeValue;
      onlanguagechange?: EventHandlerAttributeValue;
      onmessage?: EventHandlerAttributeValue;
      onoffline?: EventHandlerAttributeValue;
      ononline?: EventHandlerAttributeValue;
      onpopstate?: EventHandlerAttributeValue;
      onredo?: EventHandlerAttributeValue;
      onstorage?: EventHandlerAttributeValue;
      onundo?: EventHandlerAttributeValue;
      onunload?: EventHandlerAttributeValue;
    }
    interface IQuoteElementAttributes {
      cite?: string;
    }
    interface IDDElementAttributes {
      nowrap?: "yes" | "no";
    }
    interface ILIElementAttributes {
      value?: number;
    }
    interface IOLElementAttributes {
      reversed?: boolean;
      start?: number;
      type?: "a" | "A" | "i" | "I" | "1";
    }
    interface IAElementAttributes extends IBaseElementAttributes {
      download?: string;
      hreflang?: string;
      ping?: string;
      referrerpolicy?: ReferrerPolicy;
      rel?: string;
      type?: string;
    }
    interface IBDOElementAttributes {
      dir?: "ltr" | "rtl";
    }
    interface IDataElementAttributes {
      value?: string;
    }
    interface ITimeElementAttributes {
      datetime?: string;
    }
    interface IAreaElementAttributes extends IAElementAttributes {
      accesskey?: string;
      alt?: string;
      coords?: string;
      nohref?: boolean;
      shape?: "rect" | "rectangle" | "circ" | "circle" | "poly" | "polygon" | "default";
    }
    interface IAudioElementAttributes {
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: CrossOriginOption;
      loop?: boolean;
      muted?: boolean;
      preload?: "none" | "metadata" | "auto" | "";
      src?: string;
    }
    interface IImgElementAttributes {
      alt?: string;
      crossorigin?: CrossOriginOption;
      decoding?: "sync" | "async" | "auto";
      height?: string;
      importance?: "auto" | "high" | "low";
      intrinsicsize?: string;
      referrerpolicy?: ReferrerPolicy;
      sizes?: string;
      src?: string;
      srcset?: string;
      width?: string;
      usemap?: string;
    }
    interface IMapElementAttributes {
      name?: string;
    }
    interface ITrackElementAttributes {
      default?: boolean;
      kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
      label?: string;
      src?: string;
      srclang?: string;
    }
    interface IVideoElementAttributes extends IAudioElementAttributes {
      buffered?: boolean;
      height?: string;
      intrinsicsize?: string;
      playsinline?: boolean;
      poster?: string;
      width?: string;
    }
    interface IEmbedElementAttributes {
      height?: string;
      src?: string;
      type?: string;
      width?: string;
    }
    interface IIframeElementAttribute {
      allow?: string;
      allowfullscreen?: boolean;
      allowpaymentrequest?: boolean;
      csp?: string;
      height?: string;
      importance?: "auto" | "high" | "low";
      name?: string;
      referrerpolicy?: ReferrerPolicy;
      sandbox?: SandboxPolicy;
      src?: string;
      srcdoc?: string;
      width?: string;
    }
    interface IObjectElementAttributes {
      archive?: string;
      classid?: string;
      codebase?: string;
      codetype?: string;
      data?: string;
      declare?: boolean;
      form?: string;
      height?: string;
      name?: string;
      standby?: string;
      tabindex?: string;
      type?: string;
      typemustmatch?: boolean;
      usemap?: string;
      width?: string;
    }
    interface IParamElementAttributes {
      name?: string;
      value?: string;
    }
    interface ISourceElementAttributes {
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
      media?: string;
    }
    interface ICanvasElementAttributes {
      height?: string;
      width?: string;
    }
    interface IScriptElementAttributes {
      async?: boolean;
      crossorigin?: CrossOriginOption;
      defer?: boolean;
      integrity?: string;
      nomodule?: boolean;
      nonce?: string;
      src?: string;
      text?: string;
      type?: "module" | string;
    }
    interface IDemarcatedEditElementAttributes {
      cite?: string;
      datetime?: string;
    }
    interface IColElementAttributes {
      span?: number;
    }
    interface ITdElementAttributes {
      colspan?: number;
      headers?: string;
      rowspan?: number;
    }
    interface IThElementAttributes extends ITdElementAttributes {
      abbr?: string;
      scope?: "row" | "col" | "rowgroup" | "colgroup" | "auto";
    }
    interface IButtonElementAttributes {
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: FormMediaType;
      formmethod?: FormMethod;
      formnovalidate?: boolean;
      formtarget?: TargetOption;
      name?: string;
      type?: "submit" | "reset" | "button";
      value?: string;
    }
    interface IFieldsetElementAttributes {
      disabled?: boolean;
      form?: string;
      name?: string;
    }
    interface IFormElementAttributes {
      "accept-charset"?: string;
      action?: string;
      autocapitalize?: AutoCapitalizeOption;
      autocomplete?: AutoCompleteOption;
      enctype?: FormMediaType;
      method?: FormMethod;
      name?: string;
      novalidate?: boolean;
      target?: TargetOption;
    }
    interface IInputElementAttributes {
      autocomplete?: AutoCompleteOption;
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      list?: string;
      name?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      tabindex?: number;
      type?: InputElementType;
      value?: string;
    }
    interface ILabelElementAttributes {
      for?: string;
      form?: string;
    }
    interface IMeterElementAttributes {
      value?: number;
      min?: number;
      max?: number;
      low?: number;
      high?: number;
      optimum?: number;
      form?: string;
    }
    interface IOptGroupElementAttributes {
      disabled?: boolean;
      label?: string;
    }
    interface IOptionElementAttributes extends IOptGroupElementAttributes {
      selected?: boolean;
      value?: string;
    }
    interface IOutputElementAttributes {
      for?: string;
      form?: string;
      name?: string;
    }
    interface IProgressElementAttributes {
      max?: number;
      value?: number;
    }
    interface ISelectElementAttributes {
      autocomplete?: AutoCompleteOption;
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      multiple?: boolean;
      name?: string;
      required?: boolean;
      size?: number;
    }
    interface ITextareaElementAttributes {
      autocapitalize?: AutoCapitalizeOption;
      autocomplete?: AutoCompleteOption;
      autofocus?: boolean;
      cols?: number;
      disabled?: boolean;
      form?: string;
      maxlenght?: number;
      minlength?: number;
      name?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      rows?: number;
      spellcheck?: "true" | "default" | "false";
      wrap?: "hard" | "soft" | "off";
    }
    interface IInteractiveElementAttributes {
      open?: boolean;
    }
    interface IMenuElementAttributes {
      type?: "toolbar";
    }
    interface ISlotElementAttributes {
      name?: string;
    }

    type GlobalElementAttributes =
      & IEventHandlerAttributes
      & IAriaAttributes
      & IDataAttributes
      & IMicroDataAttributes;
    type HTMLElementAttributes =
      & GlobalElementAttributes
      & IHTMLElementAttributes;
    type BaseElementAttributes =
      & GlobalElementAttributes
      & IBaseElementAttributes;
    type LinkElementAttributes =
      & GlobalElementAttributes
      & ILinkElementAttributes;
    type MetaElementAttributes =
      & GlobalElementAttributes
      & IMetaElementAttributes;
    type StyleElementAttributes =
      & GlobalElementAttributes
      & IStyleElementAttributes;
    type BodyElementAttributes =
      & GlobalElementAttributes
      & IBodyElementAttributes;
    type QuoteElementAttributes =
      & GlobalElementAttributes
      & IQuoteElementAttributes;
    type DDElementAttributes =
      & GlobalElementAttributes
      & IDDElementAttributes;
    type LIElementAttributes =
      & GlobalElementAttributes
      & ILIElementAttributes;
    type OLElementAttributes =
      & GlobalElementAttributes
      & IOLElementAttributes;
    type AElementAttributes =
      & GlobalElementAttributes
      & IAElementAttributes;
    type BDOElementAttributes =
      & GlobalElementAttributes
      & IBDOElementAttributes;
    type DataElementAttributes =
      & GlobalElementAttributes
      & IDataElementAttributes;
    type TimeElementAttributes =
      & GlobalElementAttributes
      & ITimeElementAttributes;
    type AreaElementAttributes =
      & GlobalElementAttributes
      & IAreaElementAttributes;
    type AudioElementAttributes =
      & GlobalElementAttributes
      & IAudioElementAttributes;
    type ImgElementAttributes =
      & GlobalElementAttributes
      & IImgElementAttributes;
    type MapElementAttributes =
      & GlobalElementAttributes
      & IMapElementAttributes;
    type TrackElementAttributes =
      & GlobalElementAttributes
      & ITrackElementAttributes;
    type VideoElementAttributes =
      & GlobalElementAttributes
      & IVideoElementAttributes;
    type EmbedElementAttributes =
      & GlobalElementAttributes
      & IEmbedElementAttributes;
    type IframeElementAttribute =
      & GlobalElementAttributes
      & IIframeElementAttribute;
    type ObjectElementAttributes =
      & GlobalElementAttributes
      & IObjectElementAttributes;
    type ParamElementAttributes =
      & GlobalElementAttributes
      & IParamElementAttributes;
    type SourceElementAttributes =
      & GlobalElementAttributes
      & ISourceElementAttributes;
    type CanvasElementAttributes =
      & GlobalElementAttributes
      & ICanvasElementAttributes;
    type ScriptElementAttributes =
      & GlobalElementAttributes
      & IScriptElementAttributes;
    type DemarcatedEditElementAttributes =
      & GlobalElementAttributes
      & IDemarcatedEditElementAttributes;
    type ColElementAttributes =
      & GlobalElementAttributes
      & IColElementAttributes;
    type TdElementAttributes =
      & GlobalElementAttributes
      & ITdElementAttributes;
    type ThElementAttributes =
      & GlobalElementAttributes
      & IThElementAttributes;
    type InteractiveElementAttributes =
      & GlobalElementAttributes
      & IInteractiveElementAttributes;
    type MenuElementAttributes =
      & GlobalElementAttributes
      & IMenuElementAttributes;
    type SlotElementAttributes =
      & GlobalElementAttributes
      & ISlotElementAttributes;
    type ButtonElementAttributes =
      & GlobalElementAttributes
      & IButtonElementAttributes;
    type FieldsetElementAttributes =
      & GlobalElementAttributes
      & IFieldsetElementAttributes;
    type FormElementAttributes =
      & GlobalElementAttributes
      & IFormElementAttributes;
    type InputElementAttributes =
      & GlobalElementAttributes
      & IInputElementAttributes;
    type LabelElementAttributes =
      & GlobalElementAttributes
      & ILabelElementAttributes;
    type MeterElementAttributes =
      & GlobalElementAttributes
      & IMeterElementAttributes;
    type OptGroupElementAttributes =
      & GlobalElementAttributes
      & IOptGroupElementAttributes;
    type OptionElementAttributes =
      & GlobalElementAttributes
      & IOptionElementAttributes;
    type OutputElementAttributes =
      & GlobalElementAttributes
      & IOutputElementAttributes;
    type ProgressElementAttributes =
      & GlobalElementAttributes
      & IProgressElementAttributes;
    type SelectElementAttributes =
      & GlobalElementAttributes
      & ISelectElementAttributes;
    type TextareaElementAttributes =
      & GlobalElementAttributes
      & ITextareaElementAttributes;

    interface IntrinsicElements {
      /////////////////////////
      // Main root
      /////////////////////////

      /**
       * The HTML <html> element represents the root (top-level element) of an HTML document,
       * so it is also referred to as the root element. All other elements must be descendants
       * of this element.
       */
      html: HTMLElementAttributes;

      /////////////////////////
      // Document metadata
      /////////////////////////

      /**
       * The HTML <base> element specifies the base URL to use for all relative URLs contained
       * within a document. There can be only one <base> element in a document.
       */
      base: BaseElementAttributes;

      /**
       * The HTML <head> element provides general information (metadata) about the document,
       * including its title and links to its scripts and style sheets.
       */
      head: GlobalElementAttributes;

      /**
       * The HTML External Resource Link element (<link>) specifies relationships between the
       * current document and an external resource. This element is most commonly used to link
       * to stylesheets, but is also used to establish site icons (both "favicon" style icons
       * and mobile home screen/app icons) among other things.
       */
      link: LinkElementAttributes;

      /**
       * The HTML <meta> element represents metadata that cannot be represented by other HTML
       * meta-related elements, like <base>, <link>, <script>, <style> or <title>.
       */
      meta: MetaElementAttributes;

      /**
       * The HTML <style> element contains style information for a document, or part of a
       * document.
       */
      style: StyleElementAttributes;

      /**
       * The HTML Title element (<title>) defines the document's title that is shown in a
       * browser's title bar or a page's tab.
       */
      title: GlobalElementAttributes;

      /////////////////////////
      // Sectioning Root
      /////////////////////////

      /**
       * The HTML <body> Element represents the content of an HTML document. There can be
       * only one <body> element in a document.
       */
      body: BodyElementAttributes;

      /////////////////////////
      // Content sectioning
      /////////////////////////

      /**
       * The HTML <address> element indicates that the enclosed HTML provides contact
       * information for a person or people, or for an organization.
       */
      address: GlobalElementAttributes;

      /**
       * The HTML <article> element represents a self-contained composition in a document,
       * page, application, or site, which is intended to be independently distributable or
       * reusable (e.g., in syndication). Examples include: a forum post, a magazine or
       * newspaper article, or a blog entry.
       */
      article: GlobalElementAttributes;

      /**
       * The HTML <aside> element represents a portion of a document whose content is only
       * indirectly related to the document's main content.
       */
      aside: GlobalElementAttributes;

      /**
       * The HTML <footer> element represents a footer for its nearest sectioning content
       * or sectioning root element. A footer typically contains information about the
       * author of the section, copyright data or links to related documents.
       */
      footer: GlobalElementAttributes;

      /**
       * The HTML <header> element represents introductory content, typically a group of
       * introductory or navigational aids. It may contain some heading elements but also
       * other elements like a logo, a search form, an author name, and so on.
       */
      header: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h1: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h2: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h3: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h4: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h5: GlobalElementAttributes;

      /**
       * The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is
       * the highest section level and <h6> is the lowest.
       */
      h6: GlobalElementAttributes;

      /**
       * The HTML <hgroup> element represents a multi-level heading for a section of a
       * document. It groups a set of <h1>–<h6> elements.
       */
      hgroup: GlobalElementAttributes;

      /**
       * The HTML <main> element represents the dominant content of the <body> of a
       * document. The main content area consists of content that is directly related
       * to or expands upon the central topic of a document, or the central
       * functionality of an application.
       */
      main: GlobalElementAttributes;

      /**
       * The HTML <nav> element represents a section of a page whose purpose is to
       * provide navigation links, either within the current document or to other
       * documents. Common examples of navigation sections are menus, tables of
       * contents, and indexes.
       */
      nav: GlobalElementAttributes;

      /**
       * The HTML <section> element represents a standalone section — which doesn't
       * have a more specific semantic element to represent it — contained within an
       * HTML document.
       */
      section: GlobalElementAttributes;

      /////////////////////////
      // Text content
      /////////////////////////

      /**
       * The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that
       * the enclosed text is an extended quotation. Usually, this is rendered visually
       * by indentation (see Notes for how to change it). A URL for the source of the
       * quotation may be given using the cite attribute, while a text representation
       * of the source can be given using the <cite> element.
       */
      blockquote: QuoteElementAttributes;

      /**
       * The HTML <dd> element provides the details about or the definition of the
       * preceding term (<dt>) in a description list (<dl>).
       */
      dd: DDElementAttributes;

      /**
       * The HTML Content Division element (<div>) is the generic container for flow
       * content. It has no effect on the content or layout until styled using CSS.
       */
      div: GlobalElementAttributes;

      /**
       * The HTML <dl> element represents a description list. The element encloses a
       * list of groups of terms (specified using the <dt> element) and descriptions
       * (provided by <dd> elements). Common uses for this element are to implement a
       * glossary or to display metadata (a list of key-value pairs).
       */
      dl: GlobalElementAttributes;

      /**
       * The HTML <dt> element specifies a term in a description or definition list,
       * and as such must be used inside a <dl> element.
       */
      dt: GlobalElementAttributes;

      /**
       * The HTML <figcaption> element represents a caption or legend for the rest of
       * the contents its parent <figure> element, if any.
       */
      figcaption: GlobalElementAttributes;

      /**
       * The HTML <figure> element represents self-contained content, frequently with
       * a caption (<figcaption>), and is typically referenced as a single unit.
       */
      figure: GlobalElementAttributes;

      /**
       * The HTML <hr> element represents a thematic break between paragraph-level
       * elements: for example, a change of scene in a story, or a shift of topic
       * with a section.
       */
      hr: GlobalElementAttributes;

      /**
       * The HTML <li> element is used to represent an item in a list. It must be
       * contained in a parent element: an ordered list (<ol>), an unordered list
       * (<ul>), or a menu (<menu>). In menus and unordered lists, list items are
       * usually displayed using bullet points. In ordered lists, they are usually
       * displayed with an ascending counter on the left, such as a number or letter.
       */
      li: LIElementAttributes;

      /**
       * The HTML <ol> element represents an ordered list of items, typically
       * rendered as a numbered list.
       */
      ol: OLElementAttributes;

      /**
       * The HTML <p> element represents a paragraph.
       */
      p: GlobalElementAttributes;

      /**
       * The HTML <pre> element represents preformatted text which is to be
       * presented exactly as written in the HTML file.
       */
      pre: GlobalElementAttributes;

      /**
       * The HTML <ul> element represents an unordered list of items, typically
       * rendered as a bulleted list.
       */
      ul: GlobalElementAttributes;

      /////////////////////////
      // Inline text semantics
      /////////////////////////

      /**
       * The HTML <a> element (or anchor element) creates a hyperlink to other web
       * pages, files, locations within the same page, email addresses, or any
       * other URL.
       */
      a: AElementAttributes;

      /**
       * The HTML Abbreviation element (<abbr>) represents an abbreviation or
       * acronym; the optional title attribute can provide an expansion or
       * description for the abbreviation.
       */
      abbr: GlobalElementAttributes;

      /**
       * The HTML Bring Attention To element (<b>)  is used to draw the reader's
       * attention to the element's contents, which are not otherwise granted
       * special importance.
       */
      b: GlobalElementAttributes;

      /**
       * The HTML Bidirectional Isolate element (<bdi>)  tells the browser's
       * bidirectional algorithm to treat the text it contains in isolation from
       * its surrounding text.
       */
      bdi: GlobalElementAttributes;

      /**
       * The HTML Bidirectional Text Override element (<bdo>) overrides the
       * current directionality of text, so that the text within is rendered in
       * a different direction.
       */
      bdo: BDOElementAttributes;

      /**
       * The HTML <br> element produces a line break in text (carriage-return).
       * It is useful for writing a poem or an address, where the division of
       * lines is significant.
       */
      br: GlobalElementAttributes;

      /**
       * The HTML Citation element (<cite>) is used to describe a reference to a
       * cited creative work, and must include either the title or author or the
       * URL of that work.
       */
      cite: GlobalElementAttributes;

      /**
       * The HTML <code> element displays its contents styled in a fashion
       * intended to indicate that the text is a short fragment of computer code.
       */
      code: GlobalElementAttributes;

      /**
       * The HTML <data> element links a given content with a machine-readable
       * translation. If the content is time- or date-related, the <time> element
       * must be used.
       */
      data: DataElementAttributes;

      /**
       * The HTML Definition element (<dfn>) is used to indicate the term being
       * defined within the context of a definition phrase or sentence.
       */
      dfn: GlobalElementAttributes;

      /**
       * The HTML <em> element marks text that has stress emphasis. The <em>
       * element can be nested, with each level of nesting indicating a greater
       * degree of emphasis.
       */
      em: GlobalElementAttributes;

      /**
       * The HTML <i> element represents a range of text that is set off from the
       * normal text for some reason. Some examples include technical terms,
       * foreign language phrases, or fictional character thoughts. It is
       * typically displayed in italic type.
       */
      i: GlobalElementAttributes;

      /**
       * The HTML Keyboard Input element (<kbd>) represents a span of inline text
       * denoting textual user input from a keyboard, voice input, or any other
       * text entry device.
       */
      kbd: GlobalElementAttributes;

      /**
       * The HTML Mark Text element (<mark>) represents text which is marked or
       * highlighted for reference or notation purposes, due to the marked
       * passage's relevance or importance in the enclosing context.
       */
      mark: GlobalElementAttributes;

      /**
       * The HTML <q> element indicates that the enclosed text is a short inline
       * quotation. Most modern browsers implement this by surrounding the text in
       * quotation marks.
       */
      q: QuoteElementAttributes;

      /**
       * The HTML Ruby Base (<rb>) element is used to delimit the base text
       * component of a  <ruby> annotation, i.e. the text that is being annotated.
       */
      rb: GlobalElementAttributes;

      /**
       * The HTML Ruby Fallback Parenthesis (<rp>) element is used to provide
       * fall-back parentheses for browsers that do not support display of ruby
       * annotations using the <ruby> element.
       */
      rp: GlobalElementAttributes;

      /**
       * The HTML Ruby Text (<rt>) element specifies the ruby text component of a
       * ruby annotation, which is used to provide pronunciation, translation, or
       * transliteration information for East Asian typography. The <rt> element
       * must always be contained within a <ruby> element.
       */
      rt: GlobalElementAttributes;

      /**
       * The HTML Ruby Text Container (<rtc>) element embraces semantic annotations
       * of characters presented in a ruby of <rb> elements used inside of <ruby>
       * element. <rb> elements can have both pronunciation (<rt>) and semantic
       * (<rtc>) annotations.
       */
      rtc: GlobalElementAttributes;

      /**
       * The HTML <ruby> element represents a ruby annotation. Ruby annotations are
       * for showing pronunciation of East Asian characters.
       */
      ruby: GlobalElementAttributes;

      /**
       * The HTML <s> element renders text with a strikethrough, or a line through
       * it. Use the <s> element to represent things that are no longer relevant or
       * no longer accurate. However, <s> is not appropriate when indicating
       * document edits; for that, use the <del> and <ins> elements, as appropriate.
       */
      s: GlobalElementAttributes;

      /**
       * The HTML Sample Element (<samp>) is used to enclose inline text which
       * represents sample (or quoted) output from a computer program.
       */
      samp: GlobalElementAttributes;

      /**
       * The HTML <small> element makes the text font size one size smaller (for
       * example, from large to medium, or from small to x-small) down to the
       * browser's minimum font size.  In HTML5, this element is repurposed to
       * represent side-comments and small print, including copyright and legal
       * text, independent of its styled presentation.
       */
      small: GlobalElementAttributes;

      /**
       * The HTML <span> element is a generic inline container for phrasing content,
       * which does not inherently represent anything. It can be used to group
       * elements for styling purposes (using the class or id attributes), or
       * because they share attribute values, such as lang.
       */
      span: GlobalElementAttributes;

      /**
       * The HTML Strong Importance Element (<strong>) indicates that its contents
       * have strong importance, seriousness, or urgency. Browsers typically render
       * the contents in bold type.
       */
      strong: GlobalElementAttributes;

      /**
       * The HTML Subscript element (<sub>) specifies inline text which should be
       * displayed as subscript for solely typographical reasons.
       */
      sub: GlobalElementAttributes;

      /**
       * The HTML Superscript element (<sup>) specifies inline text which is to be
       * displayed as superscript for solely typographical reasons.
       */
      sup: GlobalElementAttributes;

      /**
       * The HTML <time> element represents a specific period in time.
       */
      time: TimeElementAttributes;

      /**
       * The HTML Unarticulated Annotation Element (<u>) represents a span of
       * inline text which should be rendered in a way that indicates that it has
       * a non-textual annotation.
       */
      u: GlobalElementAttributes;

      /**
       * The HTML Variable element (<var>) represents the name of a variable in a
       * mathematical expression or a programming context.
       */
      var: GlobalElementAttributes;

      /**
       * The HTML <wbr> element represents a word break opportunity—a position
       * within text where the browser may optionally break a line, though its
       * line-breaking rules would not otherwise create a break at that location.
       */
      wbr: GlobalElementAttributes;

      /////////////////////////
      // Image and multimedia
      /////////////////////////

      /**
       * The HTML <area> element defines a hot-spot region on an image, and
       * optionally associates it with a hypertext link. This element is used
       * only within a <map> element.
       */
      area: AreaElementAttributes;

      /**
       * The HTML <audio> element is used to embed sound content in documents. It
       * may contain one or more audio sources, represented using the src
       * attribute or the <source> element: the browser will choose the most
       * suitable one. It can also be the destination for streamed media, using
       * a MediaStream.
       */
      audio: AudioElementAttributes;

      /**
       * The HTML <img> element embeds an image into the document. It is a replaced
       * element.
       */
      img: ImgElementAttributes;

      /**
       * The HTML <map> element is used with <area> elements to define an image map
       * (a clickable link area).
       */
      map: MapElementAttributes;

      /**
       * The HTML <track> element is used as a child of the media elements <audio>
       * and <video>. It lets you specify timed text tracks (or time-based data),
       * for example to automatically handle subtitles. The tracks are formatted
       * in WebVTT format (.vtt files) — Web Video Text Tracks or Timed Text Markup
       * Language (TTML).
       */
      track: TrackElementAttributes;

      /**
       * The HTML Video element (<video>) embeds a media player which supports
       * video playback into the document.
       */
      video: VideoElementAttributes;

      /////////////////////////
      // Embedded content
      /////////////////////////

      /**
       * The HTML <embed> element embeds external content at the specified point in
       * the document. This content is provided by an external application or other
       * source of interactive content such as a browser plug-in.
       */
      embed: EmbedElementAttributes;

      /**
       * The HTML Inline Frame element (<iframe>) represents a nested browsing
       * context, embedding another HTML page into the current one.
       */
      iframe: IframeElementAttribute;

      /**
       * The HTML <object> element represents an external resource, which can be
       * treated as an image, a nested browsing context, or a resource to be
       * handled by a plugin.
       */
      object: ObjectElementAttributes;

      /**
       * The HTML <param> element defines parameters for an <object> element.
       */
      param: ParamElementAttributes;

      /**
       * The HTML <picture> element contains zero or more <source> elements and one
       * <img> element to provide versions of an image for different display/device
       * scenarios.
       */
      picture: GlobalElementAttributes;

      /**
       * The HTML <source> element specifies multiple media resources for the
       * <picture>, the <audio> element, or the <video> element. It is an empty
       * element. It is commonly used to serve the same media content in multiple
       * formats supported by different browsers.
       */
      source: SourceElementAttributes;

      /////////////////////////
      // Scripting
      /////////////////////////

      /**
       * Use the HTML <canvas> element with either the canvas scripting API or the
       * WebGL API to draw graphics and animations.
       */
      canvas: CanvasElementAttributes;

      /**
       * The HTML <noscript> element defines a section of HTML to be inserted if a
       * script type on the page is unsupported or if scripting is currently turned
       * off in the browser.
       */
      noscript: GlobalElementAttributes;

      /**
       * The HTML <script> element is used to embed or reference executable code;
       * this is typically used to embed or refer to JavaScript code.
       */
      script: ScriptElementAttributes;

      /////////////////////////
      // Demarcating edits
      /////////////////////////

      /**
       * The HTML <del> element represents a range of text that has been deleted
       * from a document.
       */
      del: DemarcatedEditElementAttributes;

      /**
       * The HTML <ins> element represents a range of text that has been added to
       * a document.
       */
      ins: DemarcatedEditElementAttributes;

      /////////////////////////
      // Table content
      /////////////////////////

      /**
       * The HTML Table Caption element (<caption>) specifies the caption (or
       * title) of a table, and if used is always the first child of a <table>.
       */
      caption: GlobalElementAttributes;

      /**
       * The HTML <col> element defines a column within a table and is used for
       * defining common semantics on all common cells. It is generally found
       * within a <colgroup> element.
       */
      col: ColElementAttributes;

      /**
       * The HTML <colgroup> element defines a group of columns within a table.
       */
      colgroup: ColElementAttributes;

      /**
       * The HTML <table> element represents tabular data — that is, information
       * presented in a two-dimensional table comprised of rows and columns of
       * cells containing data.
       */
      table: GlobalElementAttributes;

      /**
       * The HTML Table Body element (<tbody>) encapsulates a set of table row
       * (<tr> elements), indicating that they comprise the body of the table
       * (<table>).
       */
      tbody: GlobalElementAttributes;

      /**
       * The HTML <td> element defines a cell of a table that contains data. It
       * participates in the table model.
       */
      td: TdElementAttributes;

      /**
       * The HTML <tfoot> element defines a set of rows summarizing the columns
       * of the table.
       */
      tfoot: GlobalElementAttributes;

      /**
       * The HTML <th> element defines a cell as header of a group of table cells.
       * The exact nature of this group is defined by the scope and headers
       * attributes.
       */
      th: ThElementAttributes;

      /**
       * The HTML <thead> element defines a set of rows defining the head of the
       * columns of the table.
       */
      thead: GlobalElementAttributes;

      /**
       * The HTML <tr> element defines a row of cells in a table. The row's cells
       * can then be established using a mix of <td> (data cell) and <th> (header
       * cell) elements.The HTML <tr> element specifies that the markup contained
       * inside the <tr> block comprises one row of a table, inside which the <th>
       * and <td> elements create header and data cells, respectively, within the
       * row.
       */
      tr: GlobalElementAttributes;

      /////////////////////////
      // Forms
      /////////////////////////

      /**
       * The HTML <button> element represents a clickable button, which can be used
       * in forms or anywhere in a document that needs simple, standard button
       * functionality.
       */
      button: ButtonElementAttributes;

      /**
       * The HTML <datalist> element contains a set of <option> elements that
       * represent the values available for other controls.
       */
      datalist: GlobalElementAttributes;

      /**
       * The HTML <fieldset> element is used to group several controls as well as
       * labels (<label>) within a web form.
       */
      fieldset: FieldsetElementAttributes;

      /**
       * The HTML <form> element represents a document section that contains
       * interactive controls for submitting information to a web server.
       */
      form: FormElementAttributes;

      /**
       * The HTML <input> element is used to create interactive controls for
       * web-based forms in order to accept data from the user; a wide variety of
       * types of input data and control widgets are available, depending on the
       * device and user agent.
       */
      input: InputElementAttributes;

      /**
       * The HTML <label> element represents a caption for an item in a user
       * interface.
       */
      label: LabelElementAttributes;

      /**
       * The HTML <legend> element represents a caption for the content of its
       * parent <fieldset>.
       */
      legend: GlobalElementAttributes;

      /**
       * The HTML <meter> element represents either a scalar value within a known
       * range or a fractional value.
       */
      meter: MeterElementAttributes;

      /**
       * The HTML <optgroup> element creates a grouping of options within a
       * <select> element.
       */
      optgroup: OptGroupElementAttributes;

      /**
       * The HTML <option> element is used to define an item contained in a
       * <select>, an <optgroup>, or a <datalist> element. As such, <option> can
       * represent menu items in popups and other lists of items in an HTML
       * document.
       */
      option: OptionElementAttributes;

      /**
       * The HTML Output element (<output>) is a container element into which a
       * site or app can inject the results of a calculation or the outcome of a
       * user action.
       */
      output: OutputElementAttributes;

      /**
       * The HTML <progress> element displays an indicator showing the completion
       * progress of a task, typically displayed as a progress bar.
       */
      progress: ProgressElementAttributes;

      /**
       * The HTML <select> element represents a control that provides a menu of
       * options.
       */
      select: SelectElementAttributes;

      /**
       * The HTML <textarea> element represents a multi-line plain-text editing
       * control, useful when you want to allow users to enter a sizeable amount
       * of free-form text, for example a comment on a review or feedback form.
       */
      textarea: TextareaElementAttributes;

      /////////////////////////
      // Interactive elements
      /////////////////////////

      /**
       * The HTML Details Element (<details>) creates a disclosure widget in which
       * information is visible only when the widget is toggled into an "open"
       * state.
       */
      details: InteractiveElementAttributes;

      /**
       * The HTML <dialog> element represents a dialog box or other interactive
       * component, such as an inspector or window.
       */
      dialog: InteractiveElementAttributes;

      /**
       * The HTML <menu> element represents a group of commands that a user can
       * perform or activate. This includes both list menus, which might appear
       * across the top of a screen, as well as context menus, such as those that
       * might appear underneath a button after it has been clicked.
       */
      menu: MenuElementAttributes;

      /**
       * The HTML Disclosure Summary element (<summary>) element specifies a
       * summary, caption, or legend for a <details> element's disclosure box.
       */
      summary: GlobalElementAttributes;

      /////////////////////////
      // Web Components
      /////////////////////////

      /**
       * The HTML <slot> element—part of the Web Components technology suite—is
       * a placeholder inside a web component that you can fill with your own
       * markup, which lets you create separate DOM trees and present them
       * together.
       */
      slot: SlotElementAttributes;

      /**
       * The HTML Content Template (<template>) element is a mechanism for
       * holding client-side content that is not to be rendered when a page is
       * loaded but may subsequently be instantiated during runtime using
       * JavaScript.
       */
      template: GlobalElementAttributes;

      // allow for custom elements
      [key: string]: GlobalElementAttributes;
    }
  }
}
