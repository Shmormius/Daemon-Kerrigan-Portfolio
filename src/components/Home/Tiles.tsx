import { ReactElement } from "react";
import Glass from "../glass";
import QualificationCard from "./qualification-card";

export default function Tiles(): ReactElement {
  return (
    <div className="box-container">
        <Glass>
          <QualificationCard
            title="Programming"
            items={[
              "Java", 
              "C", 
              "C++", 
              "Python", 
              "Assembly", 
              "algorithms",
              "data structures"
            ]}
          ></QualificationCard>
        </Glass>
        <Glass>
          <QualificationCard
            title="Machine Learning"
            items={[
              "Neural Networks", 
              "TensorFlow", 
              "PyTorch", 
              "Sklearn", 
              "Pandas", 
              "SVM", 
              "Regression"
            ]}
          ></QualificationCard>
        </Glass>
        <Glass>
          <QualificationCard
            title="Programming"
            items={[
              "Java", 
              "C", 
              "C++", 
              "Python", 
              "Assembly", 
              "algorithms",
              "data structures"
            ]}
          ></QualificationCard>
        </Glass>
        <Glass>
          <QualificationCard
            title="Programming"
            items={[
              "Java", 
              "C", 
              "C++", 
              "Python", 
              "Assembly", 
              "algorithms",
              "data structures"
            ]}
          ></QualificationCard>
        </Glass>
    </div>
  );
}