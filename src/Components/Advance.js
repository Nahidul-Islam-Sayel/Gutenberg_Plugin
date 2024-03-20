import { __ } from '@wordpress/i18n';
import {
	__experimentalDivider as Divider,
	ToggleControl,
} from '@wordpress/components';
import { PanelBody } from '@wordpress/components';

const AdvanceSettings = ( { attributes, setAttributes } ) => {
	const { responsiveConditions } = attributes;

	return (
		<div>
			<PanelBody title={ __( 'Responsive Conditions', 'easy-slider' ) }>
				<br />
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					} }
				>
					<p>Hide On Desktop</p>
					<ToggleControl
						checked={ responsiveConditions?.desktop }
						onChange={ ( newValue ) => {
							setAttributes( {
								responsiveConditions: {
									...responsiveConditions,
									desktop: newValue,
								},
							} );
						} }
					/>
				</div>
				<br />
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					} }
				>
					<p>Hide On Tablet</p>
					<ToggleControl
						checked={ responsiveConditions?.tablet }
						onChange={ ( newValue ) => {
							setAttributes( {
								responsiveConditions: {
									...responsiveConditions,
									tablet: newValue,
								},
							} );
						} }
					/>
				</div>
				<br />
				<div
					style={ {
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					} }
				>
					<p>Hide On Mobile</p>
					<ToggleControl
						checked={ responsiveConditions?.mobile }
						onChange={ ( newValue ) => {
							setAttributes( {
								responsiveConditions: {
									...responsiveConditions,
									mobile: newValue,
								},
							} );
						} }
					/>
				</div>
			</PanelBody>
		</div>
	);
};
export default AdvanceSettings;