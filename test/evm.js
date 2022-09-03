
const ERRORS = require('../../helpers/errors')
const { soliditySha3 } = require('web3-utils')
const { rawEncode } = require('ethereumjs-abi')
const { getEventArgument, ZERO_ADDRESS } = require('@aragon/contract-helpers-test')
const { assertEvent, assertAmountOfEvents, assertRevert } = require('@aragon/contract-helpers-test/src/asserts')
const { getInstalledApp, createExecutorId, encodeCallScript } = require('@aragon/contract-helpers-test/src/aragon-os')

const ACL = artifacts.require('ACL')
const Kernel = artifacts.require('Kernel')
const KernelProxy = artifacts.require('KernelProxy')
const EVMScriptRegistry = artifacts.require('EVMScriptRegistry')
const CallsScript = artifacts.require('CallsScript')
const IEVMScriptExecutor = artifacts.require('IEVMScriptExecutor')
