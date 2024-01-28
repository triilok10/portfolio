import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>


            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href="mailto:ittiku3@gmail.com">saying hi</a>
                    </span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>Ward No.1 , Indrapura , Udaipuwati , Jhunjhunun (333307)</p>
                    </div>
                    <ul className={css.menu}>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experience</li>
                    </ul>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;