import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({ attributes }) {
    const {
        slides,
        currentSlideIndex,
        move,
        tabHeadingTagName
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
                        <div key={index} className={`slide ${index === currentSlideIndex ? "active" : ""}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                className='title'
                                tagName={tabHeadingTagName } // Default to 'h2' if tabHeadingTagName is not provided
                                value={slide.title}
                                style={{
                                    textAlign: move,
                                }}
                            />
                            <RichText.Content
                                className='content'
                                tagName="p"
                                value={slide.content}
                                style={{
                                    textAlign: move,
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
                    >
                        
                    </button>
                ))}
            </div>
            <div className="slider-controls">
                <button className="prev-button">&lt;</button>
                <button className="next-button">&gt;</button>
            </div>
        </div>
    );
}
