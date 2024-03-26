import React from "react";
import TeamCard from "./TeamCard";
import useGetData from "../../hooks/useGetData";

interface Props {
  type: boolean;
}
export interface Member {
  id: string;
  name: string;
  designation: string;
}
interface RequestObject {
  team: Member[];
}

const Team1: React.FC<Props> = ({ type }) => {
  const request: RequestObject = useGetData({}, "/data/team.json");
  const team = request.team;

  function index(i: number): number {
    let k = i + 2;
    if (type && k > 5) {
      if (k % 5 !== 0) {
        k = (k % 5) + 1;
      } else {
        k = 5;
      }
    }
    return k;
  }
  return (
    <div className="team-area gray-bg section-padding">
      <div className="container">
        {!type ? (
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6>Our Team</h6>
                <h2>Meet Our Proffesionals</h2>
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          {team?.length > 0 &&
            (type ? team : team.slice(0, 4))?.map((mbr, i) => (
              <div
                key={mbr.id}
                className="col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay={`${index(i) * 100}ms`}
              >
                <TeamCard member={mbr} i={i} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team1;
