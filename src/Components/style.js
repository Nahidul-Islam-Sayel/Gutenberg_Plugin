import {
	ColorPalette,
	Dashicon,
	__experimentalDivider as Divider,
	MenuGroup,
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import React from "react";
const Content = ({ attributes, setAttributes }) => {
	const [allFonts, setAllFonts] = useState([]);
	const [fontFamilies, setFontFamilies] = useState([]);
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
		TitlefontCategory
	} = attributes;
	useEffect(() => {
		const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDk4pe9MNGVrt3llulmdlfNWaQxzCc_b88`;
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				const allFonts = data.items;
				setAllFonts(allFonts);
				const labels = allFonts.map((f, i) => ({
					label: f.family,
					variants: f.variants,
					id: i,
				}));
				setFontFamilies(labels);
			})
			.catch((error) => {
				console.error("Error fetching fonts:", error);
			});
	}, []);

	return (
		<div>
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
					label={__("Select Font Family", "easy-slider")}
					value={contentFontFamily}
					options={fontFamilies}
					onChange={(value) => {
						const font = allFonts.find((f) => f.family === value);

						const fontVariantsLabel = (font?.variants || [])
							.filter((f) => !isNaN(f))
							.map((f, i) => ({
								label: f,
								value: f,
								id: i,
							}));

						const defaultVariants = [
							{
								label: 400,
								value: 400,
								id: 1,
							},
							{
								label: 600,
								value: 600,
								id: 2,
							},
						];
						setAttributes({
							contentFontFamily: font.family,
							fontCategory: font.category,
							fontVariants:
								fontVariantsLabel.length > 1
									? fontVariantsLabel
									: defaultVariants,
						});
					}}
				/>
				<MenuGroup label={__("Font Style", "easy-slider")}>
					<SelectControl
						value={fontVisualStyle}
						options={[
							{ label: "Default", value: "normal" },
							{ label: "Italic", value: "italic" },
						]}
						onChange={(change) => {
							setAttributes({
								fontVisualStyle: change,
							});
						}}
						__nextHasNoMarginBottom
					/>
				</MenuGroup>
				<MenuGroup label={__("Text Decoration", "easy-slider")}>
					<ToggleGroupControl
						onChange={(state) => {
							setAttributes({
								ContenttextDecoration: state,
							});
						}}
						value={ContenttextDecoration}
						isBlock
					>
						<ToggleGroupControlOption value="none" label="T" />
						<ToggleGroupControlOption
							value="underline"
							label={<Dashicon icon="editor-underline" />}
						/>
						<ToggleGroupControlOption
							value="line-through"
							label={<Dashicon icon="editor-strikethrough" />}
						/>
						<ToggleGroupControlOption
							value="overline"
							label={<Dashicon icon="editor-paste-text" />}
						/>
					</ToggleGroupControl>
				</MenuGroup>
			</PanelBody>

			<Divider />
			<PanelBody title={__("Title Controls")} icon="edit">
				<RangeControl
					label={__("Title Size")}
					value={titleSize}
					onChange={(value) => setAttributes({ titleSize: value })}
					min={12}
					max={36}
				/>
				<ColorPalette
					label={__("Title Color")}
					value={titleColor}
					onChange={(value) => setAttributes({ titleColor: value })}
				/>

				<SelectControl
					label={__("Select Font Family", "easy-slider")}
					value={titleFontFamily}
					options={fontFamilies}
					onChange={(value) => {
						const font = allFonts.find((f) => f.family === value);

						const fontVariantsLabel = (font?.variants || [])
							.filter((f) => !isNaN(f))
							.map((f, i) => ({
								label: f,
								value: f,
								id: i,
							}));

						const defaultVariants = [
							{
								label: 400,
								value: 400,
								id: 1,
							},
							{
								label: 600,
								value: 600,
								id: 2,
							},
						];
						setAttributes({
							titleFontFamily: font.family,
							TitlefontCategory: font.category,
							fontVariants:
								fontVariantsLabel.length > 1
									? fontVariantsLabel
									: defaultVariants,
						});
					}}
				/>
				<MenuGroup label={__("Font Style", "easy-slider")}>
					<SelectControl
						value={TitlefontVisualStyle}
						options={[
							{ label: "Default", value: "normal" },
							{ label: "Italic", value: "italic" },
						]}
						onChange={(change) => {
							setAttributes({
								TitlefontVisualStyle: change,
							});
						}}
						__nextHasNoMarginBottom
					/>
				</MenuGroup>
				<MenuGroup label={__("Text Decoration", "easy-slider")}>
					<ToggleGroupControl
						onChange={(state) => {
							setAttributes({
								TitletextDecoration: state,
							});
						}}
						value={TitletextDecoration}
						isBlock
					>
						<ToggleGroupControlOption value="none" label="T" />
						<ToggleGroupControlOption
							value="underline"
							label={<Dashicon icon="editor-underline" />}
						/>
						<ToggleGroupControlOption
							value="line-through"
							label={<Dashicon icon="editor-strikethrough" />}
						/>
						<ToggleGroupControlOption
							value="overline"
							label={<Dashicon icon="editor-paste-text" />}
						/>
					</ToggleGroupControl>
				</MenuGroup>
			</PanelBody>
		</div>
	);
};

export default Content;
