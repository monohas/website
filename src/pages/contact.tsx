import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from "../styles/contact.module.css";
import Header from "./component/Header";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = '名前は必須です';
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    if (!formData.message.trim()) newErrors.message = 'メッセージは必須です';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // ここでフォームデータを送信する処理を実装
      console.log('送信データ:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // API呼び出しのシミュレーション
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('メッセージが送信されました。');
    }
  };

  return (
    <> 
    <Header />
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <br />
      <br />
      <br />
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>お名前</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        {errors.name && <p className={styles.errorText}>{errors.name}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>メールアドレス</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>メッセージ</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        ></textarea>
        {errors.message && <p className={styles.errorText}>{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
    </>
  );
}