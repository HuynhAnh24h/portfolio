// src/components/ContactForm.jsx
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const loadingToast = toast.loading("Đang gửi liên hệ...");
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxgLOs5QosCbqAPsP8_MTC9VTRfjejSMUupOLspgGXy0UaZrcrxvS6Ib-mkZ65rEFzD/exec", {
        method: "POST",
        mode: "no-cors", // Do not change this
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(form).toString()
      });

      toast.success("Send success", { id: loadingToast });
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch (error) {
        toast.error("Error", { id: loadingToast });
    }
  };

  return (
    <section className="bg-black py-16 px-6 text-white font-mono">
        <Toaster position="top-right" />
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                <div className="flex-row justify-items-start gap-1">
                    <h2 className="text-green-500 text-xl mb-2">• Contact</h2>
                    <h3 className="text-5xl font-bold mb-10">Contac for me</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                    <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tên của bạn"
                    className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 placeholder-gray-400"
                    />
                    <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Số điện thoại"
                    className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 placeholder-gray-400"
                    />
                    <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700"
                    >
                    <option value="">Chọn dịch vụ</option>
                    <option value="Thiết kế web">Thiết kế web</option>
                    <option value="Tư vấn SEO">Tư vấn SEO</option>
                    <option value="Chạy quảng cáo">Chạy quảng cáo</option>
                    <option value="Khác">Khác</option>
                    </select>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Lời nhắn"
                    className="w-full p-3 h-32 rounded bg-gray-900 text-white border border-gray-700 placeholder-gray-400"
                    />

                    <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded"
                    >
                    Gửi liên hệ
                    </button>

                    {status && <p className="text-sm mt-2">{status}</p>}
                </form>
            </div>
        </div>
    </section>
  );
}
