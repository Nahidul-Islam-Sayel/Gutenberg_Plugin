import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import './style.scss';

export default function save({ attributes }) {
    const {
        slides,
        currentSlideIndex,
        contentColor,
        contentSize,
        contentStyle,
        titleSize,
        titleColor,
        titleStyle,
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
                                  <div style={{ height: '400px', width: '50%', padding: '10px', marginBottom: '50px' }}>
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                  
                                />
                                
                                </div>
                            )}
                            <RichText.Content
                                className='title'
                                tagName="h2"
                                value={slide.title}
                                style={{
                                    fontSize: `${titleSize}px`,
                                    color: titleColor,
                                    fontStyle: titleStyle,
                                }}
                            />
                            <RichText.Content
                                className='content'
                                tagName="p"
                                value={slide.content}
                                style={{
                                    fontSize: `${contentSize}px`,
                                    color: contentColor,
                                    fontStyle: contentStyle,
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
