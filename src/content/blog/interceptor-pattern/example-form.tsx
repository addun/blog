import { useState } from "react";

export default function () {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && "asdf"}
      <form>
        <input type="text" />
        <button type="button" onClick={() => setLoading(true)}>
          Send a form
        </button>
      </form>
    </>
  );
}
