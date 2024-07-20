// src/components/Encrypt.jsx
import { useState } from 'react';
import CryptoJS from 'crypto-js';

const Encrypt = () => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [encryptedInput, setEncryptedInput] = useState('');
  const key = 'mysecretkey12345'; // 128-bit key
  const iv = CryptoJS.enc.Hex.parse('1234567890123456'); // 16-byte IV

  const encrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), { iv }).toString();
    setEncryptedText(encrypted);
  };

  const decrypt = () => {
    const bytes = CryptoJS.AES.decrypt(encryptedInput, CryptoJS.enc.Utf8.parse(key), { iv });
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(decrypted);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-6">Encryption and Decryption</h1>
      <div className="space-y-6">
        <div className="flex flex-col space-y-4 mb-6">
          <textarea
            placeholder="Enter text to encrypt..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            onClick={encrypt}
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
          >
            Encrypt
          </button>
          <textarea
            placeholder="Encrypted text..."
            value={encryptedText}
            readOnly
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <textarea
            placeholder="Paste encrypted text here..."
            value={encryptedInput}
            onChange={(e) => setEncryptedInput(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            onClick={decrypt}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
          >
            Decrypt
          </button>
          <textarea
            placeholder="Decrypted text..."
            value={decryptedText}
            readOnly
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>
      </div>
    </div>
  );
};

export default Encrypt;
