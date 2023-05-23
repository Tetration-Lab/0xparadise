import { ethers } from 'ethers'

export const BYTES_CODE =
  '0x608060405234801561001057600080fd5b50610a7c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806314b3b724146100515780639ee0a2d014610131578063d7ae6e2d14610151578063fb37bf7014610177575b600080fd5b6100ca61005f3660046106e4565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152506040805160c081018252600a80825260208201819052918101829052606081018290526080810182905260a081019190915292915050565b6040516101289190600060c08201905063ffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525092915050565b60405180910390f35b61014461013f3660046106e4565b61018a565b60405161012891906108b4565b61016a61015f366004610951565b600195945050505050565b60405161012891906109ed565b6101446101853660046106e4565b610218565b610192610250565b600060058360800151602001516101a99190610a15565b9050600060038460800151600001516101c29190610a15565b604080516101208101825263ffffffff94851660c0820181815260e083018290526101008301829052825260208201819052918101919091529216606083018190526080830181905260a0830152509392505050565b610220610250565b6000600a8360800151602001516102379190610a15565b9050600060068460800151600001516101c29190610a15565b6040805161012081018252600060c0820181815260e083018290526101008301829052825260208201819052918101829052606081018290526080810182905260a081019190915290565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156102d4576102d461029b565b60405290565b6040516101a0810167ffffffffffffffff811182821017156102d4576102d461029b565b604051601f8201601f1916810167ffffffffffffffff811182821017156103275761032761029b565b604052919050565b803563ffffffff8116811461034357600080fd5b919050565b60006060828403121561035a57600080fd5b6040516060810181811067ffffffffffffffff8211171561037d5761037d61029b565b60405290508061038c8361032f565b815261039a6020840161032f565b60208201526103ab6040840161032f565b60408201525092915050565b600061010082840312156103ca57600080fd5b6103d26102b1565b90506103de8383610348565b81526103ec6060830161032f565b60208201526103fd6080830161032f565b604082015261040e60a0830161032f565b606082015261041f60c0830161032f565b608082015261043060e0830161032f565b60a082015292915050565b6000610340828403121561044e57600080fd5b60405160e0810181811067ffffffffffffffff821117156104715761047161029b565b60405290508061048184846103b7565b8152610491846101008501610348565b60208201526104a4846101608501610348565b60408201526104b7846101c08501610348565b60608201526104ca846102208501610348565b60808201526104dd846102808501610348565b60a08201526104f0846102e08501610348565b60c08201525092915050565b803560ff8116811461034357600080fd5b600067ffffffffffffffff8211156105275761052761029b565b5060051b60200190565b600082601f83011261054257600080fd5b813560206105576105528361050d565b6102fe565b82815260c0928302850182019282820191908785111561057657600080fd5b8387015b858110156106055781818a0312156105925760008081fd5b61059a6102b1565b6105a38261032f565b81526105b086830161032f565b8682015260406105c181840161032f565b9082015260606105d283820161032f565b9082015260806105e383820161032f565b9082015260a06105f483820161032f565b90820152845292840192810161057a565b5090979650505050505050565b600082601f83011261062357600080fd5b813560206106336105528361050d565b82815260089290921b8401810191818101908684111561065257600080fd5b8286015b848110156106775761066888826103b7565b83529183019161010001610656565b509695505050505050565b600082601f83011261069357600080fd5b813560206106a36105528361050d565b82815260059290921b840181019181810190868411156106c257600080fd5b8286015b84811015610677576106d78161032f565b83529183019183016106c6565b60008061036083850312156106f857600080fd5b610702848461043b565b915061034083013567ffffffffffffffff8082111561072057600080fd5b908401906102c0828703121561073557600080fd5b61073d6102da565b610746836104fc565b81526107546020840161032f565b60208201526107656040840161032f565b60408201526107766060840161032f565b60608201526107888760808501610348565b608082015261079a8760e085016103b7565b60a08201526101e0830135828111156107b257600080fd5b6107be88828601610531565b60c083015250610200830135828111156107d757600080fd5b6107e388828601610612565b60e083015250610220830135828111156107fc57600080fd5b61080888828601610612565b610100830152506102408301358281111561082257600080fd5b61082e88828601610682565b610120830152506102608301358281111561084857600080fd5b61085488828601610682565b610140830152506102808301358281111561086e57600080fd5b61087a88828601610682565b610160830152506102a08301358281111561089457600080fd5b6108a088828601610682565b610180830152508093505050509250929050565b600061010082019050825163ffffffff8082511684528060208301511660208501528060408301511660408501528060208601511660608501528060408601511660808501525050606083015161091360a084018263ffffffff169052565b50608083015163ffffffff90811660c084015260a09093015190921660e09091015290565b60006102c0828403121561094b57600080fd5b50919050565b60008060008060006103c0868803121561096a57600080fd5b610974878761043b565b945061034086013567ffffffffffffffff8082111561099257600080fd5b61099e89838a01610938565b95506103608801359150808211156109b557600080fd5b506109c288828901610938565b9350506109d2610380870161032f565b91506109e16103a0870161032f565b90509295509295909350565b6020810160028310610a0f57634e487b7160e01b600052602160045260246000fd5b91905290565b600063ffffffff80841680610a3a57634e487b7160e01b600052601260045260246000fd5b9216919091049291505056fea2646970667358221220875e6d20436ee235bfb55080bbc74b2c00e98801594d9aaa595b402e09d9220064736f6c63430008110033'

export const ABI = `
[
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "rock",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "wood",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fruit",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "animal",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fish",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "pearl",
              "type": "tuple"
            }
          ],
          "internalType": "struct World",
          "name": "w",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "idx",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "hp",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "dayLived",
              "type": "uint32"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "resources",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fruit",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "animal",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fish",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "pearl",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resources[]",
              "name": "harvestPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "communityBuildingPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "personalBuildingPlan",
              "type": "tuple[]"
            },
            {
              "internalType": "uint32[]",
              "name": "kills",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacks",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacked",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "heals",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct IslanderInfo",
          "name": "self",
          "type": "tuple"
        }
      ],
      "name": "planCommunityBuild",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "harvest",
              "type": "tuple"
            },
            {
              "internalType": "uint32",
              "name": "survival",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "protection",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "statue",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "atk",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "def",
              "type": "uint32"
            }
          ],
          "internalType": "struct Buildings",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "rock",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "wood",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fruit",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "animal",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fish",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "pearl",
              "type": "tuple"
            }
          ],
          "internalType": "struct World",
          "name": "w",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "idx",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "hp",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "dayLived",
              "type": "uint32"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "resources",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fruit",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "animal",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fish",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "pearl",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resources[]",
              "name": "harvestPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "communityBuildingPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "personalBuildingPlan",
              "type": "tuple[]"
            },
            {
              "internalType": "uint32[]",
              "name": "kills",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacks",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacked",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "heals",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct IslanderInfo",
          "name": "self",
          "type": "tuple"
        }
      ],
      "name": "planHarvest",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "rock",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "wood",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "fruit",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "animal",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "fish",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            }
          ],
          "internalType": "struct Resources",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "rock",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "wood",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fruit",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "animal",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fish",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "pearl",
              "type": "tuple"
            }
          ],
          "internalType": "struct World",
          "name": "w",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "idx",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "hp",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "dayLived",
              "type": "uint32"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "resources",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fruit",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "animal",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fish",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "pearl",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resources[]",
              "name": "harvestPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "communityBuildingPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "personalBuildingPlan",
              "type": "tuple[]"
            },
            {
              "internalType": "uint32[]",
              "name": "kills",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacks",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacked",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "heals",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct IslanderInfo",
          "name": "self",
          "type": "tuple"
        }
      ],
      "name": "planPersonalBuild",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "harvest",
              "type": "tuple"
            },
            {
              "internalType": "uint32",
              "name": "survival",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "protection",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "statue",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "atk",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "def",
              "type": "uint32"
            }
          ],
          "internalType": "struct Buildings",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "rock",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "wood",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fruit",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "animal",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "fish",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "supply",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevHarvest",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "prevRegen",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resource",
              "name": "pearl",
              "type": "tuple"
            }
          ],
          "internalType": "struct World",
          "name": "w",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "idx",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "hp",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "dayLived",
              "type": "uint32"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "resources",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fruit",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "animal",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fish",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "pearl",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resources[]",
              "name": "harvestPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "communityBuildingPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "personalBuildingPlan",
              "type": "tuple[]"
            },
            {
              "internalType": "uint32[]",
              "name": "kills",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacks",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacked",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "heals",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct IslanderInfo",
          "name": "self",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint8",
              "name": "idx",
              "type": "uint8"
            },
            {
              "internalType": "uint32",
              "name": "hp",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "pearl",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "dayLived",
              "type": "uint32"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "food",
                  "type": "uint32"
                }
              ],
              "internalType": "struct ResourcesUnit",
              "name": "resources",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings",
              "name": "buildings",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "rock",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "wood",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fruit",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "animal",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "fish",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "pearl",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Resources[]",
              "name": "harvestPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "communityBuildingPlan",
              "type": "tuple[]"
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "uint32",
                      "name": "rock",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "wood",
                      "type": "uint32"
                    },
                    {
                      "internalType": "uint32",
                      "name": "food",
                      "type": "uint32"
                    }
                  ],
                  "internalType": "struct ResourcesUnit",
                  "name": "harvest",
                  "type": "tuple"
                },
                {
                  "internalType": "uint32",
                  "name": "survival",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "protection",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "statue",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "atk",
                  "type": "uint32"
                },
                {
                  "internalType": "uint32",
                  "name": "def",
                  "type": "uint32"
                }
              ],
              "internalType": "struct Buildings[]",
              "name": "personalBuildingPlan",
              "type": "tuple[]"
            },
            {
              "internalType": "uint32[]",
              "name": "kills",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacks",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "attacked",
              "type": "uint32[]"
            },
            {
              "internalType": "uint32[]",
              "name": "heals",
              "type": "uint32[]"
            }
          ],
          "internalType": "struct IslanderInfo",
          "name": "other",
          "type": "tuple"
        },
        {
          "internalType": "uint32",
          "name": "damageDealtIfAttack",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "damageTakenIfAttack",
          "type": "uint32"
        }
      ],
      "name": "planVisit",
      "outputs": [
        {
          "internalType": "enum Action",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
]
`

export const INTERFACE = new ethers.Interface(ABI)
