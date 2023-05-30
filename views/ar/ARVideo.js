import * as React from 'react';
import { Platform } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlane,
  ViroARPlaneSelector,
  ViroQuad,
  ViroNode,
  ViroAnimations,
  ViroConstants
} from 'react-viro';

import DefaultAndroid from '../../data/obj/default.glb';
import DefaultIOS from '../../data/obj/default.usdc';

export default function ARVideo({ navigation }) {

    // Substituir no Viro3DObject por um objeto do tipo .obj 
    return (
        <>
          <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>
            <ViroAmbientLight color="#ffffff"/>

            <Viro3DObject
                source={require({DefaultAndroid})}
                position={[0, .2, 0]}
                scale={[.2, .2, .2]}
                type="OBJ"
                lightReceivingBitMask={3}
                shadowCastingBitMask={2}
                transformBehaviors={['billboard']}
                resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
                          require('./res/emoji_smile/emoji_smile_specular.png'),
                          require('./res/emoji_smile/emoji_smile_normal.png')]}
            />
          </ViroARScene>
        </>
    );
}