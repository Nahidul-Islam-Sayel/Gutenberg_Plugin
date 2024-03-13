import React from "react";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	RangeControl,
	ColorPalette,
	SelectControl,
} from "@wordpress/components";
const Title = ({ attributes, setAttributes }) => {
	const {
		slides,
		titleColor,
		titleSize,
		titleStyle,
		contentColor,
		contentSize,
		contentStyle,
		settingsPanelState
	} = attributes;

	return (
		<PanelBody title={__("Title Controls")} icon="admin-customizer">
			<RangeControl
				label={__("Title Size")}
				value={titleSize}
				onChange={(value) => setAttributes({ titleSize: value })}
				min={16}
				max={72}
			/>
			<ColorPalette
				label={__("Title Color")}
				value={titleColor}
				onChange={(value) => setAttributes({ titleColor: value })}
			/>
			<SelectControl
				label={__("Title Style")}
				value={titleStyle}
				options={[
					{ label: __("Normal"), value: "normal" },
					{ label: __("Italic"), value: "italic" },
					{ label: __("Oblique"), value: "oblique" },
				]}
				onChange={(value) => setAttributes({ titleStyle: value })}
			/>
		</PanelBody>
	);
};

export default Title;
