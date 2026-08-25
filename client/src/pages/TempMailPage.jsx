import { useEffect, useState } from "react";
import { toast } from "sonner";

const TempMailPage = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Generate Email & Token (via Vite Proxy /api-mail)
  const createMail = async () => {
    if (loading) return;

    try {
      setLoading(true);

      // Available domain fetch karein
      const domainRes = await fetch("/api-mail/domains");
      const domainData = await domainRes.json();
      const domain = domainData["hydra:member"]?.[0]?.domain;

      if (!domain) {
        toast.error("No domain available from Mail.tm");
        return;
      }

      // Random user details generate karein
      const randomStr = Math.random().toString(36).substring(2, 10);
      const address = `user_${randomStr}@${domain}`;
      const password = "Pass123!_user";

      // Mail.tm account create karein
      const createRes = await fetch("/api-mail/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, password }),
      });

      if (!createRes.ok) {
        const errData = await createRes.json();
        toast.error(errData.message || "Failed to create account");
        return;
      }

      // Auth bearer token fetch karein
      const tokenRes = await fetch("/api-mail/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, password }),
      });

      const tokenData = await tokenRes.json();

      if (!tokenData.token) {
        toast.error("Failed to get auth token");
        return;
      }

      setEmail(address);
      setToken(tokenData.token);

      localStorage.setItem("tempMail", address);
      localStorage.setItem("tempMailToken", tokenData.token);

      setMessages([]);
      setSelectedMessage(null);
      setSelectedId(null);

      toast.success("Temporary email generated successfully");
    } catch (error) {
      console.error("Create email error:", error);
      toast.error("Failed to generate email");
    } finally {
      setLoading(false);
    }
  };

  // 2. Copy Email
  const copyMail = async () => {
    if (!email) {
      toast.error("Generate an email first");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied successfully");
    } catch (error) {
      toast.error("Failed to copy email");
    }
  };

  // 3. Fetch Inbox Messages
  const getMessages = async () => {
    const activeToken = token || localStorage.getItem("tempMailToken");

    if (!activeToken) return;

    try {
      const res = await fetch("/api-mail/messages", {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to fetch inbox");
        return;
      }

      setMessages(Array.isArray(data["hydra:member"]) ? data["hydra:member"] : []);
    } catch (error) {
      console.error("Get messages error:", error);
    }
  };

  // 4. Read Single Message Details
  const getMessage = async (id) => {
    const activeToken = token || localStorage.getItem("tempMailToken");

    if (!activeToken || !id) return;

    try {
      const res = await fetch(`/api-mail/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Unable to load email");
        return;
      }

      setSelectedMessage(data);
      setSelectedId(id);
    } catch (error) {
      console.error("Get single message error:", error);
      toast.error("Unable to load email");
    }
  };

  // Load Saved Email or Auto-Create on First Visit
  useEffect(() => {
    const savedMail = localStorage.getItem("tempMail");
    const savedToken = localStorage.getItem("tempMailToken");

    if (savedMail && savedToken) {
      setEmail(savedMail);
      setToken(savedToken);
      getMessages();
    } else {
      createMail();
    }
  }, []);

  // Poll Inbox Every 10 Seconds
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(() => {
      getMessages();
    }, 10000);

    return () => clearInterval(interval);
  }, [token]);

  return (
    <section className="min-h-screen bg-[#accdf6] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-semibold tracking-tight">
            Temporary Mail
          </h1>
          <p className="mt-3 text-neutral-600">
            Generate disposable email addresses instantly.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="bg-white border rounded-2xl p-5 flex flex-wrap gap-3">
          <input
            value={email}
            readOnly
            placeholder="Generating email..."
            className="flex-1 min-w-[250px] h-12 px-4 border rounded-xl bg-neutral-50 shadow-inner shadow-black/30"
          />

          <button
            onClick={createMail}
            disabled={loading}
            className="px-5 h-12 rounded-xl bg-blue-600 text-white shadow-md cursor-pointer hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            onClick={copyMail}
            className="px-5 h-12 rounded-xl border shadow-md cursor-pointer bg-[#e4e7eb] border-black/10 hover:bg-neutral-50 transition"
          >
            Copy
          </button>

          <button
            onClick={getMessages}
            className="px-5 h-12 rounded-xl border border-black/10 shadow-md cursor-pointer bg-[#accdf6] font-medium hover:bg-neutral-50 transition"
          >
            Refresh
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-6 mt-8">
          {/* INBOX */}
          <div className="bg-white border rounded-2xl p-5">
            <h2 className="font-semibold text-xl mb-5">
              Inbox ({messages.length})
            </h2>

            <div className="space-y-3 max-h-[600px] overflow-auto pr-2">
              {!messages.length && (
                <p className="text-neutral-500">No messages found</p>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => getMessage(msg.id)}
                  className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selectedId === msg.id
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-neutral-200 hover:bg-neutral-50"
                  }`}
                >
                  <h3 className="font-medium line-clamp-2">
                    {msg.subject || "No Subject"}
                  </h3>

                  <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                    {msg.intro || "No preview available"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MESSAGE VIEWER */}
          <div className="bg-white border rounded-2xl p-6 min-h-[600px]">
            {!selectedMessage ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold">
                    No Email Selected
                  </h3>
                  <p className="text-neutral-500 mt-2">
                    Select an email from the inbox to view it.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="border-b pb-5">
                  <h2 className="text-2xl font-semibold">
                    {selectedMessage.subject || "No Subject"}
                  </h2>

                  <div className="mt-3 space-y-1 text-sm text-neutral-500">
                    <p>
                      From: {selectedMessage.from?.address || "Unknown"}
                    </p>
                    <p>
                      Received:{" "}
                      {new Date(
                        selectedMessage.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  {selectedMessage.html?.length ? (
                    <iframe
                      title="email-preview"
                      srcDoc={selectedMessage.html[0]}
                      className="w-full min-h-[500px] border rounded-xl"
                    />
                  ) : (
                    <div className="whitespace-pre-wrap break-words leading-7">
                      {selectedMessage.text || "No Content"}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempMailPage;