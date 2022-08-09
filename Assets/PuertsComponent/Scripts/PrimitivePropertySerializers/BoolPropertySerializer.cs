using System;
#if UNITY_EDITOR
using UnityEditor;
#endif

namespace Puerts.Component {
    public class BoolPropertySerializer : PrimitivePropertySerializer<Boolean>
    {
#if UNITY_EDITOR
        public override bool RenderEditorGUIField(string propName, bool propValue)
        {
            return EditorGUILayout.Toggle(propValue);
        }
#endif
        public override bool StringToValue(string str)
        {
            return str == "true";
        }

        public override string ValueToString(bool value)
        {
            return value ? "true" : "false";
        }

        public override bool ShouldRenderPrefix => true;

        public override int ValueTypeId => 101;
    }
}
