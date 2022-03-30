import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { BsListStars, BsGlobe } from "react-icons/bs";
import { SiLetsencrypt, SiBookmeter } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { RiEmotionLine } from "react-icons/ri";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section features-split',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0 has-top-divider features-split-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Teachers and students alike need the right tools',
    paragraph: 'Modern education gives teachers a huge amount of choice over how and where they want to teach. From virtual or physical classrooms, to creating online resources for students to learn asynchronously whenever and wherever suits them best — below is our most prominent features.'
  };

  return (
    <section id='features'
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <BsListStars style={{width:64,height:64,padding:12,color:'black'}}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Capture the Attention
                    </h4>
                  <p className="m-0 text-sm">
                  Adding information, slides, lectures and everything that students may need seriously simplifies the teacher's work resulting in captivating the attention of the class.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <SiLetsencrypt style={{width:64,height:64,padding:12,color:'black'}}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Encrypted Workflow
                    </h4>
                  <p className="m-0 text-sm">
                  CampFire uses the Advanced Encryption Standard (AES) algorithm to encrypt data and traffic.<br></br>
                  It is trusted as the standard by the U.S. government and many other organizations.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <BsGlobe style={{width:64,height:64,padding:12,color:'black'}}/>

                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Globalization
                    </h4>
                  <p className="m-0 text-sm">
                    Whether you're in-house or in the Bahamas, CampFire will always keep track of your files, groups and progress - work from anywhere in the world!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <GiTeacher style={{width:64,height:64,padding:12,color:'black'}}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Virtual Classroom
                    </h4>
                  <p className="m-0 text-sm">
                  Engage with each other and the learning material. The Virtual Classroom™ offer an added set of features that are essential to a learning environment.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <SiBookmeter style={{width:64,height:64,padding:12,color:'black'}}/>                 
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Track progress
                    </h4>
                  <p className="m-0 text-sm">
                  Compare student growth. Evaluate whether interventions are working. Get immediate insights about your students that will inform your decisions and improve instruction.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <RiEmotionLine style={{width:64,height:64,padding:12,color:'black'}}/>                       
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Higher productivity
                    </h4>
                  <p className="m-0 text-sm">
                  There's more time and energy left in the tank for what matters - thus results of both students, and teachers increase significantly.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;