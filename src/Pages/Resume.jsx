import { useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import education from "../data/education.json";
import employments from "../data/employments.json";
import language from "../data/language.json";

export default function Resume() {
  return (
    <>
      <main>
        <h1>My Resumé</h1>
        <div className="p-resume">
          <Stack gap={4}>
            <div className="p-2">
              <h2>Employment</h2>
              <br />
              <br />
              <ul className="employment">
                {employments.map((employment, index) => {
                  return (
                    <li key={index}>
                      <h4>{employment.Position}</h4>
                      <h5>
                        {employment.Company} @{employment.Duration}
                      </h5>
                      <p>{employment["Job-description"]}</p>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="p-2">
              <h2>Education</h2>
              <br />
              <br />
              <ul className="education">
                {education.map((education, index) => {
                  return (
                    <li key={index}>
                      <h4>{education.Course}</h4>
                      <h5>
                        {education.School} <br />
                        {education.Duration}
                      </h5>
                      <p>{education.Info}</p>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="p-2">
              <h2>Language</h2>
              <br />
              <br />
              <ul className="language">
                {language.map((language, index) => {
                  return (
                    <li key={index}>
                      <h4>{language.language}</h4>
                      <p>{language.proficiency}</p>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-2">
              <h2>Skills</h2>
              <br />
              <br />
              <ul className="skills">
                <li>C#</li>
                <li>.NET</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
          </Stack>
        </div>
      </main>
    </>
  );
}
