

const ArScene = () => {
  return (
    <>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="./ArAssets/Victory/Victory"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            gltf-model="https://cdn.glitch.com/06bd98b4-97ee-4c07-a546-fe39ca205034%2Fbowser.glb"
            scale="5 5 5"
            position="50 150 0"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
};

export default ArScene;
