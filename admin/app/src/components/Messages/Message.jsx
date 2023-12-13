import React from "react";
import "./messages.css";

function Message() {
  return (
    <div className="message-container flex">
      <div className="user-message ">
        <div className="user-details flex">
          <div className="profile-pic"></div>
          <div className="email">asdasdasdasdasdasd</div>
        </div>
        <div className="message-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          deserunt exercitationem voluptatum, ducimus ab accusantium
          praesentium. Voluptatum, suscipit iure. Quae, fugiat ea veritatis
          corporis amet maiores cupiditate sed? Quisquam atque odio
          reprehenderit veritatis repudiandae nesciunt, commodi laudantium harum
          soluta cupiditate impedit magnam sequi a quibusdam quaerat doloribus
          odit maiores iusto, eius debitis? Eos saepe magnam mollitia provident
          hic sint eum ea vel esse! Repellat similique aperiam vero, pariatur
          odit porro. Provident similique facere, voluptate distinctio iure
          optio in, corporis amet id rerum exercitationem! Ad non officia fugit,
          dolores voluptatem excepturi. Recusandae nemo a suscipit fugit! Autem
          sint expedita sapiente animi. Ipsum quidem eligendi dolores libero.
          Necessitatibus esse suscipit recusandae. Nulla ipsam saepe, nisi
          corporis dolore officia eaque rem ipsa iure veritatis! Voluptate
          debitis laborum eaque dolorum. Est, dolore pariatur debitis quibusdam
        </div>
      </div>
      <div className="reply">
        <textarea name="" id="" className="admin-message"></textarea>
        <button className="reply-btn">Reply</button>
      </div>
    </div>
  );
}

export default Message;
