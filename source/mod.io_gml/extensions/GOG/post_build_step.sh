#!/bin/bash

chmod +x "$(dirname "$0")/scriptUtils.sh"
source "$(dirname "$0")/scriptUtils.sh"

# ######################################################################################
# Script Functions

setupmacOS() {

    SDK_SOURCE="$SDK_PATH/Libraries/libGalaxy64.dylib"
    assertFileHashEquals $SDK_SOURCE $SDK_HASH_OSX $ERROR_SDK_HASH
    
    echo "Copying macOS (64 bit) dependencies"
    if [[ "$YYTARGET_runtime" == "VM" ]]; then
        logError "Extension is not compatible with the macOS VM export, please use YYC."
        exit 1
    else
        itemCopyTo $SDK_SOURCE "${YYprojectName}/${YYprojectName}/Supporting Files/libGalaxy.dylib"
    fi
}

# ######################################################################################
# Script Logic

# Always init the script
scriptInit

# Version locks
optionGetValue "versionStable" RUNTIME_VERSION_STABLE
optionGetValue "versionBeta" RUNTIME_VERSION_BETA
optionGetValue "versionDev" RUNTIME_VERSION_DEV
optionGetValue "versionLTS" RUNTIME_VERSION_LTS

# SDK Hash
optionGetValue "sdkHashWin" SDK_HASH_WIN
optionGetValue "sdkHashMac" SDK_HASH_OSX

# SDK Path
optionGetValue "sdkPath" SDK_PATH
optionGetValue "sdkVersion" SDK_VERSION

# Error String
ERROR_SDK_HASH="Invalid GOG SDK version, sha256 hash mismatch (expected v$SDK_VERSION)."

# Checks IDE and Runtime versions
versionLockCheck "$YYruntimeVersion" $RUNTIME_VERSION_STABLE $RUNTIME_VERSION_BETA $RUNTIME_VERSION_DEV $RUNTIME_VERSION_LTS

# Resolve the SDK path (must exist)
pathResolveExisting "$YYprojectDir" "$SDK_PATH" SDK_PATH

# Ensure we are on the output path
pushd "$YYoutputFolder" >/dev/null

# Call setup method depending on the platform
# NOTE: the setup method can be (:setupmacOS or :setupLinux)
setup$YYPLATFORM_name

popd >/dev/null

exit 0

