/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Advance.js":
/*!***********************************!*\
  !*** ./src/Components/Advance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const AdvanceSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    responsiveConditions
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Conditions', 'easy-slider')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Desktop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.desktop,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          desktop: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Tablet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.tablet,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          tablet: newValue
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hide On Mobile"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions?.mobile,
    onChange: newValue => {
      setAttributes({
        responsiveConditions: {
          ...responsiveConditions,
          mobile: newValue
        }
      });
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvanceSettings);

/***/ }),

/***/ "./src/Components/General.js":
/*!***********************************!*\
  !*** ./src/Components/General.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);






const General = ({
  attributes,
  setAttributes,
  slide
}) => {
  const {
    slides,
    align,
    editablePrefix,
    editableTitle,
    editableDescription,
    tabHeadingTagName
  } = attributes;
  const [selectedImage, setSelectedImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)("");
  const handleTextAlignmentChange = alignment => {
    setAttributes({
      move: alignment
    });
  };
  const handleToggleChange = key => {
    setAttributes({
      [key]: !attributes[key]
    });
  };
  const headerLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const handleSelectImage = media => {
    const updatedSlides = [...slides];
    updatedSlides[slide].imageUrl = media.url;
    setAttributes({
      slides: updatedSlides
    });
    setSelectedImage(media.url);
  };
  const removePicture = () => {
    const updatedSlides = slides.map((full, index) => {
      if (index === slide) {
        return {
          ...full,
          imageUrl: ""
        };
      }
      return full;
    });
    setAttributes({
      slides: updatedSlides
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image/Icon"),
    icon: "format-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: handleSelectImage,
    type: "image",
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open
    }, slides[slide].imageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Image") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Image")), slides[slide].imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: removePicture
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: slides[slide].imageUrl,
      alt: "",
      style: {
        maxWidth: "100%",
        marginTop: "10px"
      }
    })))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content"),
    icon: "editor-paragraph"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Alignment", "demo-tabs")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, ['left', 'center', 'right'].map((alignOption, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: i,
    className: "button-text-alignment",
    title: alignOption,
    onClick: () => handleTextAlignmentChange(alignOption)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(alignOption))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Settings", "demo-tabs")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Title"),
    checked: editableTitle,
    onChange: () => handleToggleChange("editableTitle")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Description"),
    checked: editableDescription,
    onChange: () => handleToggleChange("editableDescription")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Heading Tag Name', 'demo-tabs')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, headerLevels.map((tag, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: i,
    className: `button-tag ${tag === tabHeadingTagName ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      tabHeadingTagName: tag
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(tag)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ }),

/***/ "./src/Components/style.js":
/*!*********************************!*\
  !*** ./src/Components/style.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const Content = ({
  attributes,
  setAttributes
}) => {
  const [allFonts, setAllFonts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [fontFamilies, setFontFamilies] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    contentColor,
    contentSize,
    contentFontFamily,
    fontVisualStyle,
    fontWidth,
    ContenttextDecoration,
    fontVariants,
    fontCategory,
    titleSize,
    titleColor,
    titleFontFamily,
    TitlefontVisualStyle,
    TitletextDecoration,
    TitlefontCategory,
    imageBorderRadius
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDk4pe9MNGVrt3llulmdlfNWaQxzCc_b88`;
    fetch(apiUrl).then(res => res.json()).then(data => {
      const allFonts = data.items;
      setAllFonts(allFonts);
      const labels = allFonts.map((f, i) => ({
        label: f.family,
        variants: f.variants,
        id: i
      }));
      setFontFamilies(labels);
    }).catch(error => {
      console.error("Error fetching fonts:", error);
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Content Controls"),
    icon: "edit"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Content Size"),
    value: contentSize,
    onChange: value => setAttributes({
      contentSize: value
    }),
    min: 12,
    max: 36
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Content Color"),
    value: contentColor,
    onChange: value => setAttributes({
      contentColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Font Family", "easy-slider"),
    value: contentFontFamily,
    options: fontFamilies,
    onChange: value => {
      const font = allFonts.find(f => f.family === value);
      const fontVariantsLabel = (font?.variants || []).filter(f => !isNaN(f)).map((f, i) => ({
        label: f,
        value: f,
        id: i
      }));
      const defaultVariants = [{
        label: 400,
        value: 400,
        id: 1
      }, {
        label: 600,
        value: 600,
        id: 2
      }];
      setAttributes({
        contentFontFamily: font.family,
        fontCategory: font.category,
        fontVariants: fontVariantsLabel.length > 1 ? fontVariantsLabel : defaultVariants
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Font Style", "easy-slider")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: fontVisualStyle,
    options: [{
      label: "Default",
      value: "normal"
    }, {
      label: "Italic",
      value: "italic"
    }],
    onChange: change => {
      setAttributes({
        fontVisualStyle: change
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Text Decoration", "easy-slider")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    onChange: state => {
      setAttributes({
        ContenttextDecoration: state
      });
    },
    value: ContenttextDecoration,
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "none",
    label: "T"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "underline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-underline"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "line-through",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-strikethrough"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "overline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-paste-text"
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Title Controls"),
    icon: "edit"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Title Color"),
    value: titleColor,
    onChange: value => setAttributes({
      titleColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Font Family", "easy-slider"),
    value: titleFontFamily,
    options: fontFamilies,
    onChange: value => {
      const font = allFonts.find(f => f.family === value);
      const fontVariantsLabel = (font?.variants || []).filter(f => !isNaN(f)).map((f, i) => ({
        label: f,
        value: f,
        id: i
      }));
      const defaultVariants = [{
        label: 400,
        value: 400,
        id: 1
      }, {
        label: 600,
        value: 600,
        id: 2
      }];
      setAttributes({
        titleFontFamily: font.family,
        TitlefontCategory: font.category,
        fontVariants: fontVariantsLabel.length > 1 ? fontVariantsLabel : defaultVariants
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Font Style", "easy-slider")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: TitlefontVisualStyle,
    options: [{
      label: "Default",
      value: "normal"
    }, {
      label: "Italic",
      value: "italic"
    }],
    onChange: change => {
      setAttributes({
        TitlefontVisualStyle: change
      });
    },
    __nextHasNoMarginBottom: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Text Decoration", "easy-slider")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    onChange: state => {
      setAttributes({
        TitletextDecoration: state
      });
    },
    value: TitletextDecoration,
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "none",
    label: "T"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "underline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-underline"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "line-through",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-strikethrough"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "overline",
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
      icon: "editor-paste-text"
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image Controls"),
    icon: "format-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border Radius"),
    value: imageBorderRadius,
    onChange: value => setAttributes({
      imageBorderRadius: value
    }),
    min: 0,
    max: 50
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_General__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/General */ "./src/Components/General.js");
/* harmony import */ var _Components_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/style */ "./src/Components/style.js");
/* harmony import */ var _Components_Advance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Advance */ "./src/Components/Advance.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");










function Edit({
  attributes,
  setAttributes,
  isSelected
}) {
  const [currentSlide, setCurrentSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [isEditing, setIsEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [activePanel, setActivePanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("image");
  const {
    slides,
    contentColor,
    contentSize,
    contentStyle,
    settingsPanelState,
    move,
    editablePrefix,
    editableTitle,
    editableDescription,
    tabHeadingTagName,
    contentFontFamily,
    fontCategory,
    ContenttextDecoration,
    fontVisualStyle,
    titleSize,
    titleColor,
    titleFontFamily,
    TitlefontVisualStyle,
    TitletextDecoration,
    TitlefontCategory,
    imageBorderRadius
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isEditing && !isSelected) {
      const timer = setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides.length, isEditing, isSelected]);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  const handleEditStart = () => {
    setIsEditing(true);
  };
  const handleEditEnd = () => {
    setIsEditing(false);
  };
  const handleSlideChange = (index, key, value) => {
    const updatedSlides = slides.map((slide, i) => {
      if (i === index) {
        return {
          ...slide,
          [key]: value
        };
      }
      return slide;
    });
    setAttributes({
      slides: updatedSlides
    });
  };
  const addSlide = () => {
    const newSlide = {
      title: "New Slide",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      imageUrl: "",
      prefix: "Image 1"
    };
    setAttributes({
      slides: [...slides, newSlide]
    });
  };
  console.log(tabHeadingTagName);
  const removeSlide = indexToRemove => {
    const updatedSlides = slides.filter((slide, index) => index !== indexToRemove);
    setAttributes({
      slides: updatedSlides
    });
    if (indexToRemove === currentSlide && updatedSlides.length > 0) {
      const newIndex = indexToRemove === updatedSlides.length ? indexToRemove - 1 : indexToRemove;
      setCurrentSlide(newIndex);
    }
  };
  const removePicture = indexToRemove => {
    const updatedSlides = slides.map((slide, index) => {
      if (index === indexToRemove) {
        return {
          ...slide,
          imageUrl: ""
        };
      }
      return slide;
    });
    setAttributes({
      slides: updatedSlides
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Toolbar, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "plus-alt2",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Add Slide"),
    onClick: addSlide
  }), slides.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: index
  }, index === currentSlide && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Remove Slide"),
    onClick: () => removeSlide(index)
  }))), slides[currentSlide].imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "trash",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Remove Picture"),
    onClick: () => removePicture(currentSlide)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Slider Settings Panel", "demo-tabs")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    onChange: state => setAttributes({
      settingsPanelState: state
    }),
    value: settingsPanelState,
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "general",
    label: "General"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "Style",
    label: "Style"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    value: "advanced",
    label: "Advanced"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), settingsPanelState === "general" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_General__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    slide: currentSlide
  }), settingsPanelState === "Style" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), settingsPanelState === "advanced" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Advance__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slider-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slides",
    style: {
      transform: `translateX(-${currentSlide * 100}%)`,
      transition: isEditing ? "none" : "transform 0.5s ease-in-out"
    }
  }, slides.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "slide",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, slide.imageUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: slide.imageUrl,
    alt: slide.title,
    className: "slide-image",
    style: {
      borderRadius: `${imageBorderRadius}px`
    }
  }))) : "", editableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: tabHeadingTagName,
    className: "title",
    value: slide.title,
    onChange: value => handleSlideChange(index, "title", value),
    onFocus: handleEditStart,
    onBlur: handleEditEnd,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Enter title", "easy-slider"),
    style: {
      color: titleColor,
      textAlign: move,
      fontFamily: `${titleFontFamily}, ${TitlefontCategory}`,
      textDecoration: TitletextDecoration,
      fontStyle: TitlefontVisualStyle,
      maxWidth: "600px",
      minWidth: "600px",
      tagName: tabHeadingTagName
    }
  }), editableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: slide.content,
    onChange: value => handleSlideChange(index, "content", value),
    onFocus: handleEditStart,
    onBlur: handleEditEnd,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Enter content", "easy-slider"),
    style: {
      fontSize: `${contentSize}px`,
      color: contentColor,
      fontStyle: contentStyle,
      textAlign: move,
      fontFamily: `${(contentFontFamily, fontCategory)}`,
      textDecoration: ContenttextDecoration,
      fontStyle: fontVisualStyle
    }
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pagination-dots-button"
  }, slides.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: index,
    className: `dot-xyz ${index === currentSlide ? "active" : ""}`,
    onClick: () => setCurrentSlide(index)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slider-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "prev-button",
    onClick: prevSlide
  }, "<"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "next-button",
    onClick: nextSlide
  }, ">")));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");



function save({
  attributes
}) {
  const {
    slides,
    currentSlideIndex,
    contentColor,
    contentSize,
    contentStyle,
    settingsPanelState,
    move,
    editablePrefix,
    editableTitle,
    editableDescription,
    tabHeadingTagName,
    contentFontFamily,
    fontCategory,
    ContenttextDecoration,
    fontVisualStyle,
    titleSize,
    titleColor,
    titleFontFamily,
    TitlefontVisualStyle,
    TitletextDecoration,
    TitlefontCategory,
    responsiveConditions,
    imageBorderRadius
  } = attributes;
  const isHiddenDesktop = responsiveConditions.desktop ? 'hidden-desktop' : '';
  const isHiddenTablet = responsiveConditions.tablet ? 'hidden-tablet' : '';
  const isHiddenMobile = responsiveConditions.mobile ? 'hidden-mobile' : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${isHiddenDesktop} ${isHiddenTablet} ${isHiddenMobile}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `slider-container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slides"
  }, slides.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: `slide ${index === currentSlideIndex ? "active" : ""}`,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, slide.imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: slide.imageUrl,
    alt: slide.title,
    className: "slide-image",
    style: {
      borderRadius: `${imageBorderRadius}px`
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "title",
    tagName: tabHeadingTagName // Default to 'h2' if tabHeadingTagName is not provided
    ,
    value: slide.title,
    style: {
      fontSize: `${titleSize}px`,
      color: titleColor,
      textAlign: move,
      fontFamily: `${(titleFontFamily, TitlefontCategory)}`,
      textDecoration: TitletextDecoration,
      fontStyle: TitlefontVisualStyle
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "content",
    tagName: "p",
    value: slide.content,
    style: {
      fontSize: `${contentSize}px`,
      color: contentColor,
      fontStyle: contentStyle,
      textAlign: move,
      fontFamily: `${(contentFontFamily, fontCategory)}`,
      textDecoration: ContenttextDecoration,
      fontStyle: fontVisualStyle
    }
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pagination-dots-button"
  }, slides.map((slide, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: index,
    onClick: () => handleDotClick(index),
    className: `dot-xyz ${index === currentSlideIndex ? "active" : ""}`
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slider-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "prev-button"
  }, "<"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "next-button"
  }, ">"))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/easy-slider","version":"0.1.0","title":"Easy Slider","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":true},"textdomain":"easy-slider","attributes":{"slides":{"type":"array","default":[{"title":"New Slide","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries","imageUrl":"","prefix":"Image 1"},{"title":"New Slide","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries","imageUrl":"","prefix":"Image 1"},{"title":"New Slide","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries","imageUrl":"","prefix":"Image 1"}]},"imageSize":{"type":"string","default":"medium"},"imageRadius":{"type":"number","default":0},"settingsPanelState":{"type":"string","default":"image"},"titleColor":{"type":"string","default":""},"titleSize":{"type":"number","default":24},"titleStyle":{"type":"string","default":"normal"},"move":{"type":"string","default":"center"},"editablePrefix":{"type":"boolean","default":false},"editableTitle":{"type":"boolean","default":true},"editableDescription":{"type":"boolean","default":true},"tabHeadingTagName":{"type":"string","default":"h2"},"currentSlideIndex":{"type":"number","default":0},"contentFontFamily":{"type":"string","default":""},"fontCategory":{"type":"string","default":""},"fontVisualStyle":{"type":"string","default":"default"},"fontWidth":{"type":"string","default":"400"},"fontVariants":{"type":"array","default":[{"label":"400","value":"400","id":1},{"label":"600","value":"600","id":2}]},"ContenttextDecoration":{"type":"string","default":"none"},"fontSize":{"type":"number","default":"17"},"titleFontFamily":{"type":"string","default":""},"TitlefontVisualStyle":{"type":"string","default":"default"},"TitletextDecoration":{"type":"string","default":"none"},"TitlefontCategory":{"type":"string","default":""},"responsiveConditions":{"type":"object","default":{"desktop":false,"tablet":false,"mobile":false}},"imageBorderRadius":{"type":"number","default":0}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkeasy_slider"] = globalThis["webpackChunkeasy_slider"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map