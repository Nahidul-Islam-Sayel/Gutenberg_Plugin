import { RichText, useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

export default function save({ attributes }) {
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
		TitlefontCategory
	} = attributes;

	const handleDotClick = (index) => {
		// Since this is the save function, you shouldn't set attributes here
		// This function should only handle displaying the saved content
		// setAttributes({ currentSlideIndex: index });
	};

	return (
		<div {...useBlockProps.save()}>
			<div className="slider-container">
				<div className="slides">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`slide ${index === currentSlideIndex ? "active" : ""}`}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{slide.imageUrl && (
								<div className="image-wrapper">
									<img
										src={slide.imageUrl}
										alt={slide.title}
										className="slide-image"
									/>
								</div>
							)}
							<RichText.Content
								className="title"
								tagName={tabHeadingTagName} // Default to 'h2' if tabHeadingTagName is not provided
								value={slide.title}
								style={{
									fontSize: `${titleSize}px`,
										color: titleColor,
										
										textAlign: move,
										fontFamily: `${(titleFontFamily, TitlefontCategory)
										}`,
									
										textDecoration: TitletextDecoration,
										fontStyle: TitlefontVisualStyle,
								}}
							/>
							<RichText.Content
								className="content"
								tagName="p"
								value={slide.content}
                                style={{
                                    fontSize: `${contentSize}px`,
                                    color: contentColor,
                                    fontStyle: contentStyle,
                                    textAlign: move,
                                    fontFamily: `${(contentFontFamily, fontCategory)
                                    }`,
                                
                                    textDecoration: ContenttextDecoration,
                                    fontStyle: fontVisualStyle,
                                }}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="pagination-dots-button">
				{slides.map((slide, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`dot-xyz ${index === currentSlideIndex ? "active" : ""}`}
					></button>
				))}
			</div>
			<div className="slider-controls">
				<button className="prev-button">&lt;</button>
				<button className="next-button">&gt;</button>
			</div>
		</div>
	);
}
