# SilverBullet plug to sync tasks with a CalDAV server

Sync Tasks from SilverBullet to a CalDav server.

## Local Development
1. In your (development) space, create a namespace folder under `Library/`:
```bash
mkdir -p ~/myspace/Library/Dobli
```

2. Symlink this plug's folder into the namespaced folder:

```bash
ln -s $PWD ~/myspace/Library/Dobli/silverbullet-caldav
```

## Build
To build this plug, make sure you have [Node.js installed](https://nodejs.org/). Then, install dependencies and build the plug with:

```shell
npm install
npm run build
```

Within ~20s SilverBullet will automatically sync your plug code, just watch your browser's JavaScript console to see when this happens. Then run the `Plugs: Reload` command to reload and reactivate the plug (no reload required).

## Distribution
1. Commit the compiled `caldav.plug.js` file to the repository
2. Other people can now install this plug via the `Library: Install` command using the URL to your PLUG.md file as URI, e.g. `https://github.com/Dobli/silverbullet-caldav/blob/main/PLUG.md`
