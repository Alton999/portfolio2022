import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// React icons
import { FaArrowDown } from "react-icons/fa";

// Custom component
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar"

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles.body}>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar/>
			<main className={styles.container}>

				<section className={styles.landing} id="landingSection">
					<section>
						<h1 className={styles.title}>Hi, I am Alton Ong</h1>
						<ul className={styles.listSkills}>
							<li>UI/UX Design</li>
							<li>Web Designer</li>
							<li>Front End Developer</li>
						</ul>
						<p className={styles.bodyText}>
							I am currently a student at the
							<span> University of Sydney </span> studying Design Computing in
							my final year, and I have a strong passion for developing web
							pages and web apps. I have a strong understanding of the latest
							design principles for user interface design as well as experience
							designs within applications.
						</p>
						<p className={styles.bodyText}>
							I am open to working as a <span> front end developer </span>
							building strong UI foundations in websites or as a
							<span> UIUX designer </span> trying to find the next product
							improvement and designing the next breakthrough app.
						</p>
					</section>
					<section>
						<figure className={styles.profileImgContainer}>
							<Image
								className={styles.profileImg}
								src={"/assets/ProfilePhoto.jpg"}
								width={400}
								height={400}
								// layout="fill"
								alt="Professional profile photo of Alton"
							/>
						</figure>
					</section>
				</section>
			</main>

			<section className={styles.downArrowContainer}>
				<Link href="#projectsSection">
					<div>
						<p>View Projects</p>
						<FaArrowDown className={styles.genericIcon} />
					</div>
				</Link>
			</section>

			<section
				className={`${styles.projectsSection} ${styles.container}`}
				id="projectsSection"
			>
				<h1 className={styles.title}>Projects Collection</h1>
				<section className={styles.cardsContainer}>
					{/* First card */}
					<ProjectCard
						projectTitle="CCWM Experience Redesign"
						skills={[
							"Experience Design",
							"Reframing Experience",
							"AR/VR implementation"
						]}
						route="/ccwmProject"
						route="/project_pages/ccwmProject"
						imageRef="UserExperienceProject/CCWM.jpg"
					/>
					<ProjectCard
						projectTitle="User Interaction Digital Concept"
						skills={[
							"User Interaction Design",
							"Background Research",
							"Prototype methods"
						]}
						route="/"
						imageRef="UserInteractionProject/iphoneRender.svg"
					/>
					<ProjectCard
						projectTitle="Nanoresonance website design"
						skills={[
							"Webflow website builder",
							"Client Website Design",
							"P5.js implementation"
						]}
						route="https://www.nanoresonance.com.au/"
						imageRef="Nanoresonance/landingPage.jpg"
					/>
				</section>
				<section className={styles.afterProj}></section>
			</section>

			<footer></footer>
		</div>
	);
}
