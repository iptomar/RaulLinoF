import * as React from 'react';

import { ArViewerView } from "react-native-ar-viewer";
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
//import DefaultAndroid from '../../data/obj/default.glb';
//import DefaultIOS from '../../data/obj/default.usdc';

export default function ARVideo({ navigation }) {

    const [localModelPath, setLocalModelPath] = React.useState<string>();
    const [showArView, setShowArView] = React.useState(true);
    
    const loadPath = async () => {
        const modelSrc =
          Platform.OS === 'android'
            ? 'https://github.com/riderodd/react-native-ar/blob/main/example/src/dice.glb?raw=true'
            : 'https://github.com/riderodd/react-native-ar/blob/main/example/src/dice.usdz?raw=true';
        const modelPath = `${RNFS.DocumentDirectoryPath}/model.${
          Platform.OS === 'android' ? 'glb' : 'usdz'
        }`;
        const exists = await RNFS.exists(modelPath);
        if (!exists) {
          await RNFS.downloadFile({
            fromUrl: modelSrc,
            toFile: modelPath,
          }).promise;
        }
    
        setLocalModelPath(modelPath);
      };
    
      React.useEffect(() => {
        loadPath();
      });

    return (
        <View style={styles.container}>
            {localModelPath && showArView && (
                <ArViewerView
                model={localModelPath}
                style={styles.arView}
                disableInstantPlacement
                manageDepth
                allowRotate
                allowScale
                allowTranslate
                onStarted={() => console.log('AR Started')}
                onEnded={() => console.log('AR Ended')}
                />
            )}
        </View>
    );
}