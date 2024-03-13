import React from "react";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	RangeControl,
	ColorPalette,
	SelectControl,
	ToggleControl,
	__experimentalDivider as Divider,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { Toolbar } from "@wordpress/components";
import "./editor.scss";
import General from "./Components/General";
import Content from "./Components/Content";
import Title from "./Components/Title";

export default function Edit({ attributes, setAttributes, isSelected }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isEditing, setIsEditing] = useState(false);
	const [activePanel, setActivePanel] = useState("image");

	const {
		slides,
		titleColor,
		titleSize,
		titleStyle,
		contentColor,
		contentSize,
		contentStyle,
		settingsPanelState,
		move,
		editablePrefix,
		editableTitle,
		editableDescription,
		tabHeadingTagName,
	} = attributes;

	const blockProps = useBlockProps();

	useEffect(() => {
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
					[key]: value,
				};
			}
			return slide;
		});

		setAttributes({ slides: updatedSlides });
	};

	const addSlide = () => {
		const newSlide = {
			title: "New Slide",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
			imageUrl: "",
			prefix: "Image 1"
		};
		setAttributes({ slides: [...slides, newSlide] });
	};
	console.log(tabHeadingTagName);

	const removeSlide = (indexToRemove) => {
		const updatedSlides = slides.filter(
			(slide, index) => index !== indexToRemove,
		);
		setAttributes({ slides: updatedSlides });
		if (indexToRemove === currentSlide && updatedSlides.length > 0) {
			const newIndex =
				indexToRemove === updatedSlides.length
					? indexToRemove - 1
					: indexToRemove;
			setCurrentSlide(newIndex);
		}
	};

	const removePicture = (indexToRemove) => {
		const updatedSlides = slides.map((slide, index) => {
			if (index === indexToRemove) {
				return { ...slide, imageUrl: "" };
			}
			return slide;
		});
		setAttributes({ slides: updatedSlides });
	};
	return (
		<div {...blockProps}>
			<BlockControls>
				<Toolbar>
					<Button icon="plus-alt2" label={__("Add Slide")} onClick={addSlide} />
					{slides.map((slide, index) => (
						<React.Fragment key={index}>
							{index === currentSlide && (
								<Button
									icon="dismiss"
									label={__("Remove Slide")}
									onClick={() => removeSlide(index)}
								/>
							)}
						</React.Fragment>
					))}
					{slides[currentSlide].imageUrl && (
						<Button
							icon="trash"
							label={__("Remove Picture")}
							onClick={() => removePicture(currentSlide)}
						/>
					)}
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Slider Settings Panel", "demo-tabs")}>
					<ToggleGroupControl
						onChange={(state) => setAttributes({ settingsPanelState: state })}
						value={settingsPanelState}
						isBlock
					>
						<ToggleGroupControlOption value="general" label="General" />
						<ToggleGroupControlOption value="style" label="Style" />
						<ToggleGroupControlOption value="advanced" label="Advanced" />
					</ToggleGroupControl>
					<Divider />

					{settingsPanelState === "general" && (
						<General
							attributes={attributes}
							setAttributes={setAttributes}
							slide={currentSlide}
						/>
					)}
					{settingsPanelState === "Style" && (
						<Content attributes={attributes} setAttributes={setAttributes} />
					)}
					{settingsPanelState === "advanced" && (
						<Title attributes={attributes} setAttributes={setAttributes} />
					)}
				</PanelBody>
			</InspectorControls>
			<div className="slider-container">
				<div
					className="slides"
					style={{
						transform: `translateX(-${currentSlide * 100}%)`,
						transition: isEditing ? "none" : "transform 0.5s ease-in-out",
					}}
				>
					{slides.map((slide, index) => (
					<div key={index} className="slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						{slide.imageUrl ? (
							<div style={{ height: '400px', width: '50%', padding: '10px', marginBottom: '50px' }}>
								<img
									src={slide.imageUrl}
									alt={slide.title}
									style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
								/>
								{editablePrefix && (
									<RichText
										tagName='p'
										className="prefix"
										value={slide.prefix}
										onChange={(value) =>
											handleSlideChange(index, "prefix", value)
										}
										onFocus={handleEditStart}
										onBlur={handleEditEnd}
										placeholder={__("Enter Prefix", "easy-slider")}
										style={{
											textAlign: "center", 
										}}
									/>
								)}
							</div>
						) : (
							""
						)}

							{editableTitle && (
								 <div>
								 <RichText
									 tagName={tabHeadingTagName}
									 className="title"
									 value={slide.title}
									 onChange={(value) => handleSlideChange(index, "title", value)}
									 onFocus={handleEditStart}
									 onBlur={handleEditEnd}
									 placeholder={__("Enter title", "easy-slider")}
									 style={{
										 textAlign: move,
									 }}
								 />
								 <hr className="title-separator" />
							 </div>
							)}

							{editableDescription && (
								<RichText
									tagName="p"
									value={slide.content}
									onChange={(value) =>
										handleSlideChange(index, "content", value)
									}
									onFocus={handleEditStart}
									onBlur={handleEditEnd}
									placeholder={__("Enter content", "easy-slider")}
									style={{
										fontSize: `${contentSize}px`,
										color: contentColor,
										fontStyle: contentStyle,
										textAlign: move,
									}}
								/>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="pagination-dots-button">
				{slides.map((slide, index) => (
					<button
						key={index}
						className={`dot-xyz ${index === currentSlide ? "active" : ""}`}
						onClick={() => setCurrentSlide(index)}
					/>
				))}
			</div>

			<div className="slider-controls">
				<button className="prev-button" onClick={prevSlide}>
					&lt;
				</button>
				<button className="next-button" onClick={nextSlide}>
					&gt;
				</button>
			</div>
		</div>
	);
}
