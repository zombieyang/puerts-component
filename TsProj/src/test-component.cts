import {Transporter} from "./puerts-component/transporter.deco.cjs";
import {Component} from "./puerts-component/component.cjs";
import { Property } from "./puerts-component/property.deco.cjs";
import { System, UnityEngine } from "csharp";
import { $generic } from "puerts";

@Transporter()
export default class TestComponent extends Component {

    @Property(UnityEngine.Transform)
    test1Prop: UnityEngine.Transform;

    @Property(UnityEngine.Transform)
    test2Prop: UnityEngine.Transform;

    @Property($generic(System.Collections.Generic.List$1, UnityEngine.GameObject))
    test3Prop: []

    @Property(System.Boolean)
    test4Prop: boolean;

    @Property(UnityEngine.Vector3)
    test5Prop: UnityEngine.Vector3;

    @Property($generic(System.Collections.Generic.List$1, UnityEngine.Vector3))
    test6Prop: UnityEngine.Vector3[];

    Start(){
        console.log("TestComponent Start");
    }
}