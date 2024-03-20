import React from 'react';
import { __ } from "@wordpress/i18n";
import {
    Button,
    PanelBody,
    ToggleControl,
    MenuGroup,
    ButtonGroup
} from "@wordpress/components";
import {
	MediaUpload
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

const General = ({ attributes, setAttributes, slide }) => {
    const { slides, align, editablePrefix, editableTitle, editableDescription, tabHeadingTagName } = attributes;
    const [selectedImage, setSelectedImage] = useState("");

    const handleTextAlignmentChange = (alignment) => {
        setAttributes({ move: alignment });
    };

    const handleToggleChange = (key) => {
        setAttributes({ [key]: !attributes[key] });
    };

    const headerLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    const handleSelectImage = (media) => {
		const updatedSlides = [...slides];
		updatedSlides[slide].imageUrl = media.url;
		setAttributes({ slides: updatedSlides });
		setSelectedImage(media.url);
	};
    const removePicture = () => {
		const updatedSlides = slides.map((full, index) => {
			if (index === slide) {
				return { ...full, imageUrl: "" };
			}
			return full;
		});
		setAttributes({ slides: updatedSlides });
	};

    return (
        <div>
           <PanelBody title={__("Image/Icon")} icon="format-image">
                <MediaUpload
                    onSelect={handleSelectImage}
                    type="image"
                    render={({ open }) => (
                        <div>
                            <Button onClick={open}>
                                {slides[slide].imageUrl ? __("Change Image") : __("Select Image")}
                            </Button>
                            {slides && (
                                <>
                                    <Button onClick={removePicture}>
                                        {__("Remove Image")}
                                    </Button>
                                    <img src={slides[slide].imageUrl} alt="" style={{ maxWidth: "100%", marginTop: "10px" }} />
                                </>
                            )}
                              
                        </div>
                    )}
                />
            </PanelBody>
            <PanelBody title={__("Content")} icon="editor-paragraph">
                <MenuGroup label={__("Text Alignment", "demo-tabs")}>
                    <ButtonGroup
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        {['left', 'center', 'right'].map((alignOption, i) => (
                            <Button
                                key={i}
                                className="button-text-alignment"
                                title={alignOption}
                                onClick={() =>
                                    handleTextAlignmentChange(alignOption)
                                }
                            >
                                {__(alignOption)}
                            </Button>
                        ))}
                    </ButtonGroup>
                </MenuGroup>
                <MenuGroup label={__("Content Settings", "demo-tabs")}>
                
                    <ToggleControl
                        label={__("Enable Title")}
                        checked={editableTitle}
                        onChange={() => handleToggleChange("editableTitle")}
                    />
                    <ToggleControl
                        label={__("Enable Description")}
                        checked={editableDescription}
                        onChange={() => handleToggleChange("editableDescription")}
                    />
                </MenuGroup>
                <MenuGroup label={__( 'Tab Heading Tag Name', 'demo-tabs' )}>
                    <ButtonGroup
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {headerLevels.map((tag, i) => (
                            <Button
                                key={i}
                                className={`button-tag ${tag === tabHeadingTagName ? 'is-active' : ''}`}
                                onClick={() =>
                                    setAttributes({
                                        tabHeadingTagName: tag,
                                    })
                                }
                            >
                                {__(tag)}
                            </Button>
                        ))}
                    </ButtonGroup>
                </MenuGroup>
            </PanelBody>
        </div>
    );
};

export default General;
