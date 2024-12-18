@echo off
set Utils="%~dp0\scriptUtils.bat"

:: ######################################################################################
:: Script Logic

:: Always init the script
call %Utils% scriptInit

:: Version locks
call %Utils% optionGetValue "versionStable" RUNTIME_VERSION_STABLE
call %Utils% optionGetValue "versionBeta" RUNTIME_VERSION_BETA
call %Utils% optionGetValue "versionDev" RUNTIME_VERSION_DEV
call %Utils% optionGetValue "versionLTS" RUNTIME_VERSION_LTS

:: SDK Hash
call %Utils% optionGetValue "sdkHashWin" SDK_HASH_WIN
call %Utils% optionGetValue "sdkHashMac" SDK_HASH_OSX

:: SDK Path
call %Utils% optionGetValue "sdkPath" SDK_PATH
call %Utils% optionGetValue "sdkVersion" SDK_VERSION

:: Error String
set ERROR_SDK_HASH="Invalid GOG SDK version, sha256 hash mismatch (expected v%SDK_VERSION%)."

:: Checks IDE and Runtime versions
call %Utils% versionLockCheck "%YYruntimeVersion%" %RUNTIME_VERSION_STABLE% %RUNTIME_VERSION_BETA% %RUNTIME_VERSION_DEV% %RUNTIME_VERSION_LTS%

:: Resolve the SDK path (must exist)
call %Utils% pathResolveExisting "%YYprojectDir%" "%SDK_PATH%" SDK_PATH

:: Ensure we are on the output path
pushd "%YYoutputFolder%"

:: Call setup method depending on the platform
:: NOTE: the setup method can be (:setupWindows, :setupMacOS or :setupLinux)
call :setup%YYPLATFORM_name%

popd

exit %errorlevel%

:: ----------------------------------------------------------------------------------------------------
:setupWindows

   set SDK_SOURCE="%SDK_PATH%\Libraries\Galaxy64.dll"
   call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_WIN% %ERROR_SDK_HASH%

   echo "Copying Windows (64 bit) dependencies"
   if not exist "Galaxy64.dll" call %Utils% itemCopyTo %SDK_SOURCE% "Galaxy64.dll"

exit /b %errorlevel%

:: ----------------------------------------------------------------------------------------------------
:setupMacOS

   set SDK_SOURCE="%SDK_PATH%\Libraries\libGalaxy64.dylib"
   call %Utils% assertFileHashEquals %SDK_SOURCE% %SDK_HASH_OSX% %ERROR_SDK_HASH%

   echo "Copying macOS (64 bit) dependencies"
   if "%YYTARGET_runtime%" == "VM" (
      :: This is used from VM compilation
      call %Utils% logError "Extension is not compatible with the macOS VM export, please use YYC."
   ) else (
      :: This is used from YYC compilation
      call %Utils% itemCopyTo %SDK_SOURCE% "%YYprojectName%\%YYprojectName%\Supporting Files\libGalaxy.dylib"
   )

exit /b %errorlevel%

