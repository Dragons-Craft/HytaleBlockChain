const PostCardNFTContract = artifacts.require("PostCardNFTS");

module.exports = function (deployer) {
    deployer.deploy(PostCardNFTContract);
}