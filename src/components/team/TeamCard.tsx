import React from "react";
import { Member } from "./Team1";

interface Props {
  member: Member;
  i: number;
}

const TeamCard: React.FC<Props> = ({ member, i }) => {
  return (
    <React.Fragment>
      <div className="single-team-member">
        <div className={`team-member-bg ${i === 0 ? "" : `team-bg-${i + 1}`}`}>
          <div className="team-content">
            <div className="team-title">
              <a href="#">{member.name}</a>
            </div>
            <div className="team-subtitle">
              <p>{member.designation}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamCard;
