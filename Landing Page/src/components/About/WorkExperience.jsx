import React from "react";
import image_0 from "../../assets/alx.jpg";
import image_1 from "../../assets/images.jpg";
import image_2 from "../../assets/aws.png";

const WorkExperience = () => {
  return (
    <div className="px-[8%]">
      <div className="md:flex gap-24">
        <div className="basis-1/2">
          <h1 className="text-3xl md:text-4xl text-left">Work Experience</h1>
          <div className="my-5 bg-gray-100 pb-5">
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-semibold">
                Sanction Analyst | Gabriel Grace Consulting Services
                (PureDiligence)
              </h1>
              <h3>February 2025 - Present </h3>
            </div>
            <div className="job-discription pl-3">
              <ul>
                <li>
                  <b>Customer Screening & Due Diligence:</b> Conducts
                  comprehensive Know Your Customer (KYC) and adverse news checks
                  against global sanctions lists for prospective and existing
                  clients.
                </li>
                <li>
                  <b>Sanctions Risk Analysis:</b> Performs in-depth research and
                  investigation of clients and transactions to assess and
                  mitigate sanctions violation risks.
                </li>
                <li>
                  <b>Documentation & Reporting:</b>Maintains meticulous records
                  of screening and analysis activities, preparing detailed
                  reports for internal and external stakeholders.
                </li>
                <li>
                  <b>Training & Process Improvement:</b>Developed and delivered
                  training, including a new job aid/checklist, to enhance team
                  effectiveness and reduce onboarding time for reviewers and
                  trainees.
                </li>
              </ul>
            </div>
          </div>

          <div className="my-5 bg-gray-100 pb-5">
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-semibold">
                Executive Assistant & Project Coordinator | Get Coached with
                Faith & MindKlear Wellness
              </h1>
              <h3>Sep 2023 – Jan 2024</h3>
            </div>
            <div className="job-discription pl-3">
              <ul>
                <li>
                  <b>Executive Support:</b> Managed schedules, travel,
                  appointments, public speaking engagements, and media
                  communications; handled sensitive and confidential information
                  with discretion.
                </li>
                <li>
                  <b>Project Management</b>: Designed and executed the "Unleash
                  Your Voice Africa" leadership and self-development program for
                  50+ young professionals, overseeing logistics, budgeting, and
                  marketing (Instagram, radio, mailing lists, paid ads,
                  partnerships).
                </li>
                <li>
                  <b>Wellness & Operations:</b> Streamlined processes and
                  enhanced efficiency; utilized various software including
                  Microsoft Excel, Google Suites, Canva, Slack, Convert Kit,
                  MailChimp, Zappier, Paper Bell, and Wix. Collaborated with
                  organizations to promote wellness, mental health awareness,
                  and career development.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-5 bg-gray-100 pb-5">
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-semibold">
                BSA/AML Analyst | Gabriel Grace Consulting Services
              </h1>
              <h3>Mar 2023 – Aug 2023</h3>
            </div>
            <div className="job-discription pl-3">
              <ul>
                <li>
                  <b>Suspicious Activity Detection & Reporting:</b> Identified
                  and tracked suspicious financial activities by reviewing daily
                  transaction reports, leading to the timely investigation and
                  filing of Suspicious Activity Reports (SARs).
                </li>
                <li>
                  <b>Regulatory Compliance & Documentation:</b> Collected and
                  provided essential documentation for SARs, Currency
                  Transaction Reports (CTRs), and AML monitoring to examiners,
                  auditors, and law enforcement agencies.
                </li>
                <li>
                  <b>Due Diligence & Risk Management:</b> Conducted and
                  documented comprehensive due diligence reviews for exempt,
                  high-risk, and new customers to ensure regulatory compliance.
                </li>
                <li>
                  <b>Continuous Learning & Expertise: </b>Maintained an in-depth
                  understanding of BSA/AML regulations and FinCEN Guidelines
                  through continuous training, ensuring proficiency in detecting
                  money laundering and fraud schemes.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl">Education</h1>

          <div className="my-5 pb-5 bg-gray-100">
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-semibold">
                University of Lagos (UNILAG), Nigeria
              </h1>
              <h3>Jun 2019 - Nov 2024</h3>
            </div>
            <div className="job-discription pl-3">
              Bachelor of Science: Accounting
            </div>
          </div>

          <div className="my-5 pb-5 bg-gray-100">
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-semibold">(YABATECH), Nigeria</h1>
              <h3>Jan 2013 - Dec 2015</h3>
            </div>
            <div className="job-discription p-3">
              Ordinary National Diploma: Accountancy
            </div>
          </div>
          <div className="my-5 pb-5 bg-gray-100">
            <h1></h1>
            <div className="job-title flex mb-5 mt-5 justify-between gap-10 bg-gray-400 p-2">
              <h1 className="font-medium  text-2xl">
                Certificate and Training
              </h1>
              <h3></h3>
            </div>
            <div className="job-discription p-3">
              <ul className="">
                <li>
                  <b>
                    Designate Compliance Personel (DCP) - Compliance Institute,
                    Nigeria
                  </b>
                </li>
                <li>
                  <b>Data Analytics Training - Utiva</b>
                </li>
                <li>
                  <b>Data Analytics Certification -ALX Nigeria</b>
                </li>
                <li>
                  <b>Professional Foundations Program - ALX Nigeria</b>
                </li>
              </ul>
            </div>

            <div className="flex gap-2 pl-3">
              <img src={image_0} alt="" width={100} />
              <img src={image_1} alt="" width={100} />
              <img src={image_2} alt="" width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
