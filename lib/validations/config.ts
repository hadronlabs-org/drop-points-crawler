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

const validateAwsInfo = (config: any) => {
  if (!config.aws) throw new Error('aws is required');

  if (!config.aws.enabled) return true;

  if (!config.aws.region) throw new Error('aws.region is required');

  if (!config.aws.access_key_id)
    throw new Error('aws.access_key_id is required');

  if (!config.aws.secret_access_key)
    throw new Error('aws.secret_access_key is required');

  if (!config.aws.bucket_name) throw new Error('aws.bucket_name is required');
};

export { validateOnChainContractInfo, validateAwsInfo };
