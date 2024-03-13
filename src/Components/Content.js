import React from "react";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	RangeControl,
	ColorPalette,
	SelectControl,
} from "@wordpress/components";
const Content = ({attributes, setAttributes}) => {
	
	const {
		contentColor,
		contentSize,
		contentStyle
	} = attributes;

	return (
		<PanelBody title={__("Content Controls")} icon="edit">
			<RangeControl
				label={__("Content Size")}
				value={contentSize}
				onChange={(value) => setAttributes({ contentSize: value })}
				min={12}
				max={36}
			/>
			<ColorPalette
				label={__("Content Color")}
				value={contentColor}
				onChange={(value) => setAttributes({ contentColor: value })}
			/>
			<SelectControl
				label={__("Content Style")}
				value={contentStyle}
				options={[
					{ label: __("Normal"), value: "normal" },
					{ label: __("Italic"), value: "italic" },
					{ label: __("Oblique"), value: "oblique" },
				]}
				onChange={(value) => setAttributes({ contentStyle: value })}
			/>
		</PanelBody>
	);
};

export default Content;
