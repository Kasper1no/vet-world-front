"use client";
import './style.css'
import { useEffect, useState } from "react";

const ShowcaseSection = () => {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      import('isotope-layout').then((Isotope) => {
        const isotope = new Isotope.default('.masonary-layout', {
          itemSelector: '.col-xl-3, .col-lg-3, .col-md-6',
          layoutMode: 'masonry',
        });

        return () => {
          isotope.destroy();
        };
      });
    }
  }, [isClient]);

    return (
        <section className="showcase-area">
            <div className="container">
                <div className="sec-title text-center">
                    <h5>//<span>Вітрина</span>//</h5>
                    <h2>Фотогалерея</h2>
                </div>
                <div className="row masonary-layout">

                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-showcase-box">
                            <div className="img-holder">
                                <img src="/images/cat_lover.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="single-showcase-box">
                            <div className="img-holder">
                                <img src="/images/dog_lover4.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-showcase-box">
                            <div className="img-holder">
                                <img src="/images/dog_lover1.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-showcase-box">
                            <div className="img-holder">
                                <img src="/images/dog_lover2.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-showcase-box">
                            <div className="img-holder">
                                <img src="/images/dog_lover3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ShowcaseSection;