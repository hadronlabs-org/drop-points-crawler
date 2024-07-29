const validateOnChainContractInfo = (config: any) => {
  if (!config.on_chain_storage) throw new Error('on_chain_storage is required');

  if (!config.on_chain_storage.rpc)
    throw new Error('on_chain_storage.rpc is required');

  if (!config.on_chain_storage.contract)
    throw new Error('on_chain_storage.contract is required');

  if (!config.on_chain_storage.contract)
    throw new Error('on_chain_storage.contract is required');

  if (!config.on_chain_storage.sender)
    throw new Error('on_chain_storage.sender is required');

  if (!config.on_chain_storage.mnemonic)
    throw new Error('on_chain_storage.mnemonic is required');

  if (!config.on_chain_storage.gas)
    throw new Error('on_chain_storage.gas is required');
};

export { validateOnChainContractInfo };
