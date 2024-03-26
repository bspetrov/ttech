import React from "react";
import useGetData from "../hooks/useGetData";

interface ClientItem {
  id: string;
  img: string;
}

interface RequestObject {
  clients: ClientItem[];
}
const Clients: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/clients.json");
  const clients = request.clients;

  return (
    <div className="client-section d-flex align-items-center">
      {clients?.length > 0 &&
        clients.map((client) => (
          <div key={client.id} className="single-client-item">
            <img src={client?.img} alt={`clients-${client.id}`} />
          </div>
        ))}
    </div>
  );
};

export default Clients;
