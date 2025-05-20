import education from "../data/education.json";
import employments from "../data/employments.json";
import language from "../data/language.json";

export default function Resume() {
  return (
    <>
      <main>
        <h1>My Resumé</h1>
        <div className="p-resume">
          <div className="p-r">
            <h2>Employment</h2>
            <p>
              {employments.map((employment) => {
                return (
                  <div key={employment.id}>
                    <h5>{employment.Position}</h5>
                    <p>
                      {employment.Company} @{employment.Duration}
                      <br /> {employment["Job-description"]}
                    </p>
                    <br />
                  </div>
                );
              })}
            </p>
          </div>
          <div className="p-r">
            <h2>Education</h2>
            <p>
              {education.map((education) => {
                return (
                  <div key={education.id}>
                    <h5>{education.Course}</h5>
                    <p>
                      {education.School} @{education.Duration}
                      <br /> {education.Info}
                    </p>
                    <br />
                  </div>
                );
              })}
            </p>
          </div>
          <div className="p-r">
            <h2>Languages</h2>
            <p>
              {language.map((language) => {
                return (
                  <div key={language.id}>
                    <h5>{language.language}</h5>
                    <p>{language.proficiency}</p>
                    <br />
                  </div>
                );
              })}
            </p>
          </div>
          <div className="p-r">
            <h2>Other Skills</h2>
            <p>
              <ul>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Notion</li>
                <li>Git & GitHub & GitLab</li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
