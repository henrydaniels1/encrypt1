/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'
import { ethers } from 'ethers' // Ensure ethers is imported correctly

const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null)

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setWalletAddress(address)
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    } else {
      alert('MetaMask is not installed. Please install it to continue.')
    }
  }

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
