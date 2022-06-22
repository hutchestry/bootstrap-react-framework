import React from "react";
import { Buffer } from "buffer"; // convert from base64
import { candidateData } from "../data/candidateData";

export const AccountDetails = () => {
  return (
    <>
      {/* <AccountLister name="My Account" /> */}
      <div className="account-container">
        {candidateData.map((data, key) => {
          return (
              <Account
                key={key}
                id={data.id}
                firstName={data.firstName}
                lastName={data.lastName}
                username={data.username}
                userpassword={data.userpassword}
                email={data.email}
                employmentSituation={data.employmentSituation}
                desiredTypeOfRole={data.desiredTypeOfRole}
                video={data.video}
                skills={data.skills}
                fieldsWorked={data.fieldsWorked}
                fieldsTargeted={data.fieldsTargeted}
                relocation={data.relocation}
                locationDesired={data.locationDesired}
                targetCompanies={data.targetCompanies}
                desiredWorkEnv={data.desiredWorkEnv}
                desiredBenefits={data.desiredBenefits}
                desiredVacationDays={data.desiredVacationDays}
                desiredHourse={data.desiredHourse}
                desiredDressCode={data.desiredDressCode}
                desiredTravel={data.desiredTravel}
              />
          );
        })}
      </div>
    </>
  );
};

// const AccountLister = (props) => {
//   return (
//     <div className="account-lister">
//       <h2>{props.name}</h2>
//     </div>
//   );
// };

const Account = ({
  firstName,
  lastName,
  email,
  employmentSituation,
  desiredTypeOfRole,
  video,
  skills,
  fieldsWorked,
  fieldsTargeted,
  relocation,
  locationDesired,
  targetCompanies,
  desiredWorkEnv,
  desiredBenefits,
  desiredVacationDays,
  desiredHours,
  desiredDressCode,
  desiredTravel
}) => {
  return (
    <>
    <div className="account-detail-view">
      {/* <div className="">
        {id}
      </div> */}
      <div className="">
        <h1>{firstName} {lastName}</h1>
      </div>
      <div className="">
        {email}
      </div>
      <div className="">
        <h4 className="">Employment Status</h4>
        {employmentSituation}
      </div>
      <div className="">
        <h4 className="">Desired Type of Role</h4>
        {desiredTypeOfRole.map(role => (
          <button className="pill-button" key={role}>{role}</button>
        ))}
      </div>
      <div className="">
        <h4 className="">Desired Type of Role</h4>
        {video}
      </div>
      <div className="">
        <h4 className="">Desired Type of Role</h4>
        {skills.map(skill => (
          <button className="pill-button" key={skill}>{skill}</button>
        ))}
      </div>
      <div className="">
        {fieldsWorked.map(worked => (
          <button className="pill-button" key={worked}>{worked}</button>
        ))}
      </div>
      <div className="">
        {fieldsTargeted.map(targeted => (
          <button className="pill-button" key={targeted}>{targeted}</button>
        ))}
      </div>
      <div className="">
        {relocation}
      </div>
      <div className="">
        {locationDesired}
      </div>
      <div className="">
        {targetCompanies.map(company => (
          <button className="pill-button" key={company}>{company}</button>
        ))}
      </div>
      <div className="">
        {desiredWorkEnv.map(environment => (
          <button className="pill-button" key={environment}>{environment}</button>
        ))}
      </div>
      <div className="">
        {desiredBenefits.map(bennies => (
          <button className="pill-button" key={bennies}>{bennies}</button>
        ))}
      </div>
      <div className="">
        {desiredVacationDays}
      </div>
      <div className="">
        {desiredHours}
      </div>
      <div className="">
        {desiredDressCode}
      </div>
      <div className="">
        {desiredTravel}
      </div>
    </div>
    </>
  );
};
