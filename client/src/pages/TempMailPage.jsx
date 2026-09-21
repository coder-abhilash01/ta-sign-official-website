import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const MAIL_BASE = `${import.meta.env.VITE_BACKEND_URL}/api/mail`;

const TempMailPage = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Rate limit timer
  const [rateLimited, setRateLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const createMail = async () => {
    if (loading || rateLimited) return;

    try {
      setLoading(true);

      const domainRes = await axios.get(`${MAIL_BASE}/domains`);
      const domain = domainRes.data?.["hydra:member"]?.[0]?.domain;

      if (!domain) {
        toast.error("Mail service domain unavailable");
        return;
      }

      const randomStr = Math.random().toString(36).substring(2, 10);
      const address = `user_${randomStr}@${domain}`;
      const password = "Pass123!_user";

      await axios.post(`${MAIL_BASE}/accounts`, {
        address,
        password,
      });

      const tokenRes = await axios.post(`${MAIL_BASE}/token`, {
        address,
        password,
      });

      const userToken = tokenRes.data?.token;

      if (!userToken) {
        toast.error("Authentication failed");
        return;
      }

      setEmail(address);
      setToken(userToken);

      localStorage.setItem("tempMail", address);
      localStorage.setItem("tempMailToken", userToken);

      setMessages([]);
      setSelectedMessage(null);
      setSelectedId(null);

      toast.success("Temporary email generated");
    } catch (error) {
      console.error("Create email error:", error);

      // Rate limit reached
      if (error.response?.status === 429) {
        setRateLimited(true);
        setRemainingTime(5 * 60);

        toast.error(
          error.response?.data?.message ||
            "Too many requests. Please try again after 5 minutes."
        );

        return;
      }

      toast.error(
        error.response?.data?.message || "Failed to generate email"
      );
    } finally {
      setLoading(false);
    }
  };

  // Rate limit countdown
  useEffect(() => {
    if (!rateLimited || remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRateLimited(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [rateLimited, remainingTime]);

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

  const getMessages = async () => {
    const activeToken = token || localStorage.getItem("tempMailToken");
    if (!activeToken) return;

    try {
      const res = await axios.get(`${MAIL_BASE}/messages`, {
        headers: { Authorization: `Bearer ${activeToken}` },
      });

      const memberList = res.data?.["hydra:member"];
      setMessages(Array.isArray(memberList) ? memberList : []);
    } catch (error) {
      console.error("Get messages error:", error);
    }
  };

  const getMessage = async (id) => {
    const activeToken = token || localStorage.getItem("tempMailToken");
    if (!activeToken || !id) return;

    try {
      const res = await axios.get(`${MAIL_BASE}/messages/${id}`, {
        headers: { Authorization: `Bearer ${activeToken}` },
      });

      if (!res.data) {
        toast.error("Unable to load email");
        return;
      }

      setSelectedMessage(res.data);
      setSelectedId(id);
    } catch (error) {
      console.error("Get single message error:", error);
      toast.error("Unable to load email");
    }
  };

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
        <div className="mb-10">
          <h1 className="text-5xl font-semibold tracking-tight">
            Temporary Mail
          </h1>

          <p className="mt-3 text-neutral-600">
            Generate disposable email addresses instantly.
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-5 flex flex-wrap gap-3">
          <input
            value={email}
            readOnly
            placeholder="Generating email..."
            className="flex-1 min-w-[250px] h-12 px-4 border rounded-xl bg-neutral-50 shadow-inner shadow-black/30"
          />

          <button
            onClick={createMail}
            disabled={loading || rateLimited}
            className="px-5 h-12 rounded-xl bg-blue-600 text-white shadow-md cursor-pointer hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {rateLimited
              ? `Try again in ${Math.floor(remainingTime / 60)
                  .toString()
                  .padStart(2, "0")}:${(remainingTime % 60)
                  .toString()
                  .padStart(2, "0")}`
              : loading
              ? "Generating..."
              : "Generate"}
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

        {rateLimited && (
          <div className="mt-4 text-sm text-red-600">
            Too many requests. Please wait{" "}
            <span className="font-semibold">
              {Math.floor(remainingTime / 60)
                .toString()
                .padStart(2, "0")}
              :
              {(remainingTime % 60)
                .toString()
                .padStart(2, "0")}
            </span>{" "}
            before generating another email.
          </div>
        )}

        <div className="grid lg:grid-cols-[380px_1fr] gap-6 mt-8">
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